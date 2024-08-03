import { ipcMain, shell } from 'electron';
import SetupPageNavigationHandlers from './pageNavigationHandlers';

export default function SetupIPCHandlers() {
  SetupPageNavigationHandlers();
  ipcMain.handle('open-url', async (_, url: string) => {
    await shell.openExternal(url);
  });
}
