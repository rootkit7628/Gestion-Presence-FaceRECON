const { app, BrowserWindow } = require('electron')
const path = require('path')

//Fenetre principale
function createMainWindow(loadingWindow) {
    loadingWindow.hide()

    const mainWindow = new BrowserWindow({
        width: 1366,
        height: 768,
        center: true,
        minWidth: 1366,
        minHeight: 768,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.setMenu(null)

    mainWindow.loadFile('./STATIC/HTML/login.html')

    mainWindow.on('close', function(event) {
        app.quit()
    })
}

function createLoadingWindow() {
    const loadingWindow = new BrowserWindow({
        width: 500,
        height: 300,
        center: true,
        frame: false
    })

    loadingWindow.loadFile('./STATIC/HTML/loading.html')
    setTimeout(function() {
        createMainWindow(loadingWindow)
    }, 4300)
}

app.whenReady().then(createLoadingWindow)