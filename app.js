const electron = require('electron');
const url = require('url');
const path = require('path');

const {
    app,
    BrowserWindow
} = electron;

let mainWindow;

//listen fro app to be ready


app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true

        },
        width: 1200,
        frame: false,
        minWidth: 300
    });


    mainWindow.webContents.openDevTools();
    mainWindow.setIgnoreMouseEvents(false)

    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

    mainWindow.on('closed', () => {
        mainWindow = null;
    })

    // mainWindow.setMenu(null);
    //load html

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
})