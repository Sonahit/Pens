const Koa = require("koa");
const app = new Koa();
const spa = require("./middleware/spa");
const serve = require("koa-static");
const path = require("path");
const logger = require("koa-logger");

const root = path.resolve("client/dist");

app.use(serve(root));
app.use(logger());

require("./router.js")({ app });
app.use(spa(root));
// app.use(async (ctx, next) => (ctx.status === 404 ? await send(ctx, "/index.html", { root }) : await next()));

console.log(`Serving ${root}`);

module.exports = app;
