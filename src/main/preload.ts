// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  // renderer to main

  // renderer to renderer

  // main to renderer
  handleSetToken: (callback: (message: string) => void) => {
    const listener = (_: IpcRendererEvent, message: string) =>
      callback(message);
    ipcRenderer.on('set-token', listener);

    return () => {
      ipcRenderer.removeListener('set-token', listener);
    };
  },
});

declare global {
  interface Window {
    electronAPI: {
      handleSetToken: (callback: (message: string) => void) => () => void;
    };
  }
}
