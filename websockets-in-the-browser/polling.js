const Koa = require('koa');
const App = new Koa();
const cors = require('@koa/cors');

let count = 0;
setInterval(() => {
  count += 1;
}, 1000);

App.use(cors());
App.use(async ctx => {
  console.log(`${new Date()}: Request received. Sending response.`);
  ctx.body = count;
});

App.listen(3000);
