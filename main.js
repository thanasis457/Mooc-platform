const electron=require('electron');
const { app, BrowserWindow, globalShortcut} = require('electron');
var path=require('path');
const electronLocalshortcut = require('electron-localshortcut');


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;
const nativeImage=electron.nativeImage;
let myicon=nativeImage.createFromPath(path.join(__dirname,'mooc-logo.png'));
function createWindow () {
  // Create the browser window.
  const {width,height}=electron.screen.getPrimaryDisplay().workAreaSize
  win = new BrowserWindow({
    width,
    height,
    webPreferences: {
      nodeIntegration: true
    },
    icon: myicon
  });
  const { Menu, MenuItem } = require('electron')
  const menu = new Menu()

  menu.append(new MenuItem({
    label: 'Print',
    accelerator: 'CmdOrCtrl+P',
    click: () => { console.log('time to print stuff') }
  }))
  // and load the index.html of the app.
  win.loadFile('main_display.html')

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
  electronLocalshortcut.register(win, 'CmdOrCtrl+B', () => {
    shortcutPressed();
});


function shortcutPressed () {
    var focusedWin = BrowserWindow.getFocusedWindow();
    win.loadFile('choose_platform.html');
}
}
app.disableHardwareAcceleration();
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
