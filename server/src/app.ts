//TODO: To typescript

import Application from "koa";
import Koa from "koa";
import serve from "koa-static";
import * as path from "path";
import logger from "koa-logger";

import spa from "./Middleware/spa";

const app = new Koa();
const root = path.resolve("client/dist");

app.use(serve(root));
app.use(logger());

require("./router")({ app });

app.use(spa(root));
// app.use(async (ctx, next) => (ctx.status === 404 ? await send(ctx, "/index.html", { root }) : await next()));

console.log(`Serving ${root}`);

export default app;
