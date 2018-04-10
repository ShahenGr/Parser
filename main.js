const electron = require('electron')
// const app = electron.app

const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
let mainWindow

function createWindow () {
    mainWindow = new BrowserWindow({width: 1366, height: 768})

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      }))

      mainWindow.on('closed', function () {
        mainWindow = null
      })
}

app.on('ready', createWindow)
//mainWindow.webContents.openDevTools()

// For mac OS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
      }
})

// For mac OS
app.on('activate', () => {
   if (win === null) {
     createWindow()
   }
 })