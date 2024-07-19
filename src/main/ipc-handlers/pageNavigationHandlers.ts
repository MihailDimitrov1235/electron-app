import { ipcMain, BrowserWindow } from 'electron';

export default function SetupPageNavigationHandlers() {
  ipcMain.on('go-back', (event) => {
    const win = BrowserWindow.getFocusedWindow();
    if (win && win.webContents.canGoBack()) {
      win.webContents.goBack();
    }
  });

  ipcMain.on('go-forward', (event) => {
    const win = BrowserWindow.getFocusedWindow();
    if (win && win.webContents.canGoForward()) {
      win.webContents.goForward();
    }
  });

  ipcMain.handle('can-go-back', (event) => {
    const win = BrowserWindow.getFocusedWindow();
    return win ? win.webContents.canGoBack() : false;
  });

  ipcMain.handle('can-go-forward', (event) => {
    const win = BrowserWindow.getFocusedWindow();
    return win ? win.webContents.canGoForward() : false;
  });
}
