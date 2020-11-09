import face_recognition
import numpy as np
import cv2, queue, threading, datetime
import requests, os, re
import mysql.connector
from mysql.connector import MySQLConnection, Error
from dbconfig import read_dbconfig


# bufferless VideoCapture
class VideoCapture:
    def __init__(self, name):
        self.cap = cv2.VideoCapture(name)
        self.q = queue.Queue()
        t = threading.Thread(target=self._reader)
        t.daemon = True
        t.start()

    # read frames as soon as they are available, keeping only most recent one
    def _reader(self):
        while True:
            ret, frame = self.cap.read()
            if not ret:
                break
            if not self.q.empty():
                try:
                    self.q.get_nowait()   # discard previous (unprocessed) frame
                except queue.Empty:
                    pass
            self.q.put(frame)

    def read(self):
        return self.q.get()

# Select the webcam of the computer
video_capture = VideoCapture(0)


known_face_encodings = []
known_face_names = []
known_faces_filenames = []

for (dirpath, dirnames, filenames) in os.walk('pictures/'):
    known_faces_filenames.extend(filenames)
    break

for filename in known_faces_filenames:
    face = face_recognition.load_image_file('pictures/' + filename)
    known_face_names.append(re.sub("[0-9]",'', filename[:-4]))
    known_face_encodings.append(face_recognition.face_encodings(face)[0])



face_locations = []
face_encodings = []
face_names = []
process_this_frame = True


while True:

    # Grab a single frame of video
    frame = video_capture.read()
    
    # Process every frame only one time
    if process_this_frame:

        # Find all the faces and face encodings in the current frame of video
        face_locations = face_recognition.face_locations(frame)
        face_encodings = face_recognition.face_encodings(frame, face_locations)
        
        # Initialize an array for the name of the detected users
        face_names = []

        
        for face_encoding in face_encodings:

            # See if the face is a match for the known face(s)
            matches = face_recognition.compare_faces(known_face_encodings, face_encoding,0.5)
            name = "Unknown"

            # If a match was found in known_face_encodings, use the known face with the smallest distance to the new face
            face_distances = face_recognition.face_distance(known_face_encodings, face_encoding)
            best_match_index = np.argmin(face_distances)

            if matches[best_match_index]:
                name = known_face_names[best_match_index]

                date_sortie = datetime.datetime.now().date().strftime('%Y-%m-%d')
                heure_sortie = datetime.datetime.now().time().strftime('%H:%M:%S')
                try:

                    status = 'present'

                    if heure_sortie<datetime.time(11,29,0).strftime('%H:%M:%S') or heure_sortie<datetime.time(15,58,0).strftime('%H:%M:%S'):
                        status = 'sorti'

                    # connect to the DB
                    db = read_dbconfig()
                    connection = MySQLConnection(**db)

                    # open a cursor
                    cursor = connection.cursor()

                    # update arrival_time
                    sql = "INSERT INTO Presence(personne_id, date, heure, status) VALUES ((SELECT personne_id FROM Personne WHERE nom = %s), %s, %s, %s)"
                    val = (name, date_sortie, heure_sortie,status)
                    cursor.execute(sql, val)
                    
                except Error as error:
                    print("ERROR DB : ", error)

                finally:

                    # execute query
                    connection.commit()

                    # close database connection
                    print("MariaDB connection is closed.")
                    cursor.close()
                    connection.close()


            face_names.append(name)
        
    process_this_frame = not process_this_frame
            
    # Display the results
    for (top, right, bottom, left), name in zip(face_locations, face_names):

        # Draw a box around the face
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)

        # Draw a label with a name below the face
        font = cv2.FONT_HERSHEY_DUPLEX
        cv2.putText(frame, name, (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)

    # Display the resulting image
    cv2.imshow('Video', frame)

    # Press 'q' to quit the camera!
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break


# Release handle to the webcam
video_capture.release()
cv2.destroyAllWindows()