/* eslint-disable no-use-before-define */
// import express from 'express';
// import cors from 'cors';
// import axios from 'axios';
// import { BrowserWindow, ipcMain } from 'electron';

// let currentPort = 8080;
// let requestCount = 0;
// let server: any;
// let mainWindow: BrowserWindow | null;

// export default function createInitialServer(win: BrowserWindow | null) {
//   mainWindow = win;
//   server = createServer();
//   server.listen(currentPort, () => {
//     console.log(`Proxy server running on http://localhost:${currentPort}`);
//   });
//   ipcMain.handle('get-port', () => {
//     return currentPort;
//   });
// }

// function createServer() {
//   const newServer = express();
//   newServer.use(cors());
//   newServer.options('*', cors());
//   newServer.use(express.json());

//   newServer.post('/api', async (req, res) => {
//     try {
//       requestCount += 1;
//       if (requestCount >= 10) {
//         changeServerPort();
//       }

//       const response = await axios.post(
//         'https://graphql.anilist.co',
//         req.body,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//           },
//         },
//       );
//       res.json(response.data);
//     } catch (error) {
//       res.status(500).json({ error: 'An error occurred' });
//     }
//   });

//   return newServer;
// }

// function changeServerPort() {
//   currentPort = Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000;
//   mainWindow?.webContents.send('set-port', currentPort);
//   server.listen(currentPort, () => {
//     console.log(`Proxy server running on http://localhost:${currentPort}`);
//   });
//   requestCount = 0;
// }
