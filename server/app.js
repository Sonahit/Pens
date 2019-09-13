const Koa = require("koa");
const app = new Koa();
const serve = require("koa-static");
const path = require("path");

const root = path.resolve("client/dist");

app.use(serve(root));

console.log(`Serving ${root}`);

module.exports = app;
