const { app, BrowserWindow } = require('electron')
const { Client } = require('pg')

const client = new Client()

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }
  app.whenReady().then(() => {
    createWindow()
  })
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
 