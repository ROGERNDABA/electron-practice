const {
    remote,
    ipcrenderer
} = require('electron');
var nodeConsole = require('console');
var con = new nodeConsole.Console(process.stdout, process.stderr);


$("#minimize").on('click', function () {
    remote.getCurrentWindow().minimize();
    console.log('dfdfdfdf');
})

$("#close").on('click', function () {
    remote.app.quit();
})

$("#maximize").on('click', function () {
    const currentWindow = remote.getCurrentWindow();
    currentWindow.isMaximized() ?
        currentWindow.unmaximize() :
        currentWindow.maximize();
})

$('#click').on('click', function () {
    con.log({
        hey: "dfdf"
    });

})