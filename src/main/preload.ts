// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  // renderer to main
  openUrl: (url: string) => ipcRenderer.invoke('open-url', url),
  goBack: () => ipcRenderer.send('go-back'),
  goForward: () => ipcRenderer.send('go-forward'),
  canGoBack: () => ipcRenderer.invoke('can-go-back'),
  canGoForward: () => ipcRenderer.invoke('can-go-forward'),
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
  // handleSetPort: (callback: (message: number) => void) => {
  //   const listener = (_: IpcRendererEvent, message: number) =>
  //     callback(message);
  //   ipcRenderer.on('set-port', listener);

  //   return () => {
  //     ipcRenderer.removeListener('set-port', listener);
  //   };
  // },
});

declare global {
  interface Window {
    electronAPI: {
      openUrl: (url: string) => Promise<void>;
      goBack: () => void;
      goForward: () => void;
      canGoBack: () => Promise<boolean>;
      canGoForward: () => Promise<boolean>;
      handleSetToken: (callback: (message: string) => void) => () => void;
      // handleSetPort: (callback: (message: number) => void) => () => void;
    };
  }
}
