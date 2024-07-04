import { ipcMain, shell } from 'electron';

export default function SetupIPCHandlers() {
  ipcMain.handle('open-url', async (_, url: string) => {
    await shell.openExternal(url);
  });
}
