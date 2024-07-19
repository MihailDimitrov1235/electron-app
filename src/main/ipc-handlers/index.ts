import { ipcMain, shell, BrowserWindow } from 'electron';
import SetupPageNavigationHandlers from './pageNavigationHandlers';

export default function SetupIPCHandlers(win: BrowserWindow | null) {
  SetupPageNavigationHandlers();
  ipcMain.handle('open-url', async (_, url: string) => {
    await shell.openExternal(url);
  });
}
