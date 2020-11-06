/*********************************************

*********************************************/



var
    menuRight = document.getElementById('cbp-spmenu-s2'),
    body = document.body;


showRight.onclick = function() {
    classie.toggle(this, 'active');
    classie.toggle(menuRight, 'cbp-spmenu-open');
};


/*********************************************
                ---CAMERA---
*********************************************/
var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
            video: true
        })
        .then(function(stream) {
            video.srcObject = stream;
        })
        .catch(function(err0r) {
            console.log("Something went wrong!");
        });
}

function camera() {
    let html = `
    <div class="container-fluid">
        <div class="table-container">
            <div class="table10 ver1 m-b-110">
                <div class="table10-head">
                    <table>
                        <thead>
                            <tr class="row100 head">
                                <th class="cell100 column1"><span class="fa fa-camera" style="margin-right:10px;"></span>CAMERA IP : SRICAM SP017</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="table10-body">
                    <table>
                        <tbody>
                            <tr class="row100 body">
                                <td class="cell100 column1">
                                    <video autoplay="true" id="videoElement"></video>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>`;
    $('.kitse').html(html);
    var video = document.querySelector("#videoElement");
    navigator.mediaDevices.getUserMedia({
            video: true
        })
        .then(function(stream) {
            video.srcObject = stream;
        });
}


/*********************************************
                ---PRESENCE---
*********************************************/
function etudiant() {
    let html = `
    <div class="container-fluid">
    <div class="wrap-table100">
    <div class="table100 ver1 m-b-110">
        <div class="table100-head">
            <table>
                <thead>
                    <tr class="row100 head">
                        <th class="cell100 column1"><span class="fa fa-table" style="margin-right:10px;"></span>Date</th>
                        <th class="cell100 column2"><span class="fa fa-user" style="margin-right:10px;"></span>Nom</th>
                        <th class="cell100 column3"><span class="fa fa-user-plus" style="margin-right:10px;"></span> Prenoms</th>
                        <th class="cell100 column4"><span class="fa fa-user-graduate" style="margin-right:10px;"></span>Classe</th>
                        <th class="cell100 column5"><span class="fa fa-chalkboard-teacher" style="margin-right:10px;"></span>Matiere</th>
                        <th class="cell100 column5"><span class="fa fa-status" style="margin-right:10px;"></span>Status</th>
                        <th class="cell100 column6"><span class="fa fa-question-circle" style="margin-right:10px;"></span>Motifs</th>
                    </tr>
                </thead>
            </table>
        </div>

        <div class="table100-body js-pscroll">
            <table>
                <tbody>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 AM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Retard</td>
                        <td class="cell100 column7">Maladie</td>

                    </tr>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 PM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Abscent</td>
                        <td class="cell100 column7">Familiale</td>

                    </tr>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 AM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Abscent</td>
                        <td class="cell100 column7">Familiale</td>

                    </tr>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 PM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Retard</td>
                        <td class="cell100 column7">Maladie</td>

                    </tr>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 AM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Retard</td>
                        <td class="cell100 column7">Maladie</td>

                    </tr>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 PM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Retard</td>
                        <td class="cell100 column7">Maladie</td>

                    </tr>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 AM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Abscent</td>
                        <td class="cell100 column7">Familiale</td>

                    </tr>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 PM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Retard</td>
                        <td class="cell100 column7">Maladie</td>

                    </tr>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 AM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Retard</td>
                        <td class="cell100 column7">Maladie</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
    </div>`;
    $('.kitse').html(html);

}

function personnel() {
    let html = `
        <div class="container-fluid">
            <div class="wrap-table100">
            <div class="table100 ver1 m-b-110">
                <div class="table100-head">
                    <table>
                        <thead>
                            <tr class="row100 head">
                                <th class="cell100 column1"><span class="fa fa-table" style="margin-right:10px;"></span>Date</th>
                                <th class="cell100 column2"><span class="fa fa-user" style="margin-right:10px;"></span>Nom</th>
                                <th class="cell100 column3"><span class="fa fa-user-plus" style="margin-right:10px;"></span> Prenoms</th>
                                <th class="cell100 column4"><span class="fa fa-briefcase" style="margin-right:10px;"></span>Poste</th>
                                <th class="cell100 column5"><span class="fa fa-network-wired" style="margin-right:10px;"></span>Departement</th>
                                <th class="cell100 column5"><span class="fa fa-status" style="margin-right:10px;"></span>Status</th>
                                <th class="cell100 column6"><span class="fa fa-question-circle" style="margin-right:10px;"></span>Motifs</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div class="table100-body js-pscroll">
                    <table>
                        <tbody>
                            <tr class="row100 body">
                                <td class="cell100 column1">Mardi 05-02-20 AM</td>
                                <td class="cell100 column2">RAHERISON</td>
                                <td class="cell100 column3">Herizo</td>
                                <td class="cell100 column4">Admin Réseaux</td>
                                <td class="cell100 column5">Informatique</td>
                                <td class="cell100 column6">Abscent</td>
                                <td class="cell100 column7">Familiale</td>

                            </tr>
                            <tr class="row100 body">
                                <td class="cell100 column1">Mardi 05-02-20 PM</td>
                                <td class="cell100 column2">RAKOTONDRANAIVO</td>
                                <td class="cell100 column3">Miary</td>
                                <td class="cell100 column4">Sécrétaire</td>
                                <td class="cell100 column5">Scolarité</td>
                                <td class="cell100 column6">Retard</td>
                                <td class="cell100 column7">Maladie</td>

                            </tr>
                            <tr class="row100 body">
                                <td class="cell100 column1">Mardi 05-02-20 AM</td>
                                <td class="cell100 column2">ANDRIANTSARA</td>
                                <td class="cell100 column3">Tanya</td>
                                <td class="cell100 column4">Responsable Communication</td>
                                <td class="cell100 column5">Communication</td>
                                <td class="cell100 column6">Retard</td>
                                <td class="cell100 column7">Maladie</td>
                            </tr>
                            <tr class="row100 body">
                                <td class="cell100 column1">Mardi 05-02-20 AM</td>
                                <td class="cell100 column2">Chrystelle</td>
                                <td class="cell100 column3">Antilahy</td>
                                <td class="cell100 column4">Responsable Scolarité</td>
                                <td class="cell100 column5">Scolarité</td>
                                <td class="cell100 column6">Retard</td>
                                <td class="cell100 column7">Maladie</td>
                            </tr>
                            <tr class="row100 body">
                                <td class="cell100 column1">Mardi 05-02-20 AM</td>
                                <td class="cell100 column2">RAHERISON</td>
                                <td class="cell100 column3">Herizo</td>
                                <td class="cell100 column4">Admin Réseaux</td>
                                <td class="cell100 column5">Informatique</td>
                                <td class="cell100 column6">Retard</td>
                                <td class="cell100 column7">Maladie</td>

                            </tr>
                            <tr class="row100 body">
                                <td class="cell100 column1">Mardi 05-02-20 PM</td>
                                <td class="cell100 column2">RAKOTONDRANAIVO</td>
                                <td class="cell100 column3">Miary</td>
                                <td class="cell100 column4">Sécrétaire</td>
                                <td class="cell100 column5">Scolarité</td>
                                <td class="cell100 column6">Retard</td>
                                <td class="cell100 column7">Maladie</td>
                            </tr>
                            <tr class="row100 body">
                                <td class="cell100 column1">Mardi 05-02-20 AM</td>
                                <td class="cell100 column2">ANDRIANTSARA</td>
                                <td class="cell100 column3">Tanya</td>
                                <td class="cell100 column4">Responsable Communication</td>
                                <td class="cell100 column5">Communication</td>
                                <td class="cell100 column6">Retard</td>
                                <td class="cell100 column7">Maladie</td>
                            </tr>
                            <tr class="row100 body">
                                <td class="cell100 column1">Mardi 05-02-20 AM</td>
                                <td class="cell100 column2">Chrystelle</td>
                                <td class="cell100 column3">Antilahy</td>
                                <td class="cell100 column4">Responsable Scolarité</td>
                                <td class="cell100 column5">Scolarité</td>
                                <td class="cell100 column6">Retard</td>
                                <td class="cell100 column7">Maladie</td>
                            </tr>
                            <tr class="row100 body">
                                <td class="cell100 column1">Mardi 05-02-20 PM</td>
                                <td class="cell100 column2">RAKOTONDRANAIVO</td>
                                <td class="cell100 column3">Miary</td>
                                <td class="cell100 column4">Sécrétaire</td>
                                <td class="cell100 column5">Scolarité</td>
                                <td class="cell100 column6">Retard</td>
                                <td class="cell100 column7">Maladie</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>`;
    $('.kitse').html(html);
}


/*************************************
        Professionel
 **************************************/

function professionel() {
    let html = `
    <div class="container-fluid">
    <div class="wrap-table100">
    <div class="table100 ver1 m-b-110">
        <div class="table100-head">
            <table>
                <thead>
                    <tr class="row100 head">
                        <th class="cell100 column1"><span class="fa fa-table" style="margin-right:10px;"></span>Date</th>
                        <th class="cell100 column2"><span class="fa fa-user" style="margin-right:10px;"></span>Nom</th>
                        <th class="cell100 column3"><span class="fa fa-user-plus" style="margin-right:10px;"></span> Prenoms</th>
                        <th class="cell100 column4"><span class="fa fa-user-graduate" style="margin-right:10px;"></span>Classe</th>
                        <th class="cell100 column5"><span class="fa fa-chalkboard-teacher" style="margin-right:10px;"></span>Matiere</th>
                        <th class="cell100 column5"><span class="fa fa-clock" style="margin-right:10px;"></span>Status</th>
                        <th class="cell100 column6"><span class="fa fa-question-circle" style="margin-right:10px;"></span>Motifs</th>
                    </tr>
                </thead>
            </table>
        </div>

        <div class="table100-body js-pscroll">
            <table>
                <tbody>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 AM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Retard</td>
                        <td class="cell100 column7">Maladie</td>


                    </tr>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 PM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Retard</td>
                        <td class="cell100 column7">Maladie</td>

                    </tr>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 AM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Abscent</td>
                        <td class="cell100 column7">Familiale</td>
                        <td class="cell100 column7">Maladie</td>

                    </tr>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 PM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Retard</td>
                        <td class="cell100 column7">Maladie</td>

                    </tr>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 AM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Retard</td>
                        <td class="cell100 column7">Maladie</td>

                    </tr>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 PM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Retard</td>
                        <td class="cell100 column7">Maladie</td>

                    </tr>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 AM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Abscent</td>
                        <td class="cell100 column7">Familiale</td>

                    </tr>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 PM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Retard</td>
                        <td class="cell100 column7">Maladie</td>

                    </tr>
                    <tr class="row100 body">
                        <td class="cell100 column1">Mardi 05-02-20 AM</td>
                        <td class="cell100 column2">Arleme</td>
                        <td class="cell100 column3">Johnson</td>
                        <td class="cell100 column4">L1G2</td>
                        <td class="cell100 column5">INFO_350</td>
                        <td class="cell100 column6">Retard</td>
                        <td class="cell100 column7">Maladie</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
    </div>`;
    $('.kitse').html(html);

}






/*********************************************
                ---STATISTIQUE---
*********************************************/
function statistique() {
    let html = `
        <div class="container-fluid">
        <h1>arleme</h1>
            <h5 class="mb-4" style="text-align: center; font-weight: lighter !important;">DONNEES EN TEMPS REELS</h5>
            <div class="container d-flex align-items-stretch" style="margin-top: -3%;">
                <canvas id="myChart" width="400" height="90"></canvas>
            </div>
            <div class="container d-flex align-items-stretch" style="margin-top: 0%;">
                <canvas id="myChart1" width="400" height="90"></canvas>
            </div>
            <div class="container d-flex align-items-stretch" style="margin-top: 0%;">
                <canvas id="myChart2" width="400" height="90"></canvas>
            </div>
        </div>`;
    $('.kitse').html(html);
}