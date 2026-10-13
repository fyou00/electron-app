const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });
    win.loadFile('index.html');

    const win2 = new BrowserWindow({
        width: 800,
        height: 600,
    });
    win2.loadURL('https://github.com/fyou00');
}

app.whenReady().then(() => {
    createWindow()
})