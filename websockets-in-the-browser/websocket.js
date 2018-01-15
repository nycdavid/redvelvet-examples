const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

let connections = [];
wss.on('connection', ws => {
  connections.push(ws);
});
