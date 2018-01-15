# Getting up and running
## Deps
1. This project requires `node v8.9.0`: `nvm use`
1. `npm`/`yarn` install

## Static example
1. Run `node static.js`
1. Visit `http://localhost:3000`
1. Continuously refresh the page to see updated numbers

## Polling example
1. Run `node polling.js`
1. Open `polling.html` in your browser
1. Observe the real-time changes

## WebSockets examples
1. Start the nodejs REPL by running `node`
1. Enter `.load websocket.js` to load in the WebSocket script
1. Open `websocket.html` in your browser
1. Switch back to the node REPL and enter `let firstClient = connections[0]`
1. Enter `firstClient.send('Foo')` and observe that the web page content changes
as it received the new data.
