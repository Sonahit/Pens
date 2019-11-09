const fs = require("fs");
const send = require("koa-send");

function spa(root) {
  let origin;
  return async function singlePageApplication(ctx, next) {
    const { url, status } = ctx;
    if (!origin) origin = ctx.path.match(/^\/\w+/gi)[0];
    if (status === 404) {
      const path = url.split(origin)[1];
      if (fs.existsSync(`${root}/${path}`)) {
        await send(ctx, path, { root });
      } else {
        await send(ctx, "index.html", { root });
      }
    }
    await next();
  };
}

module.exports = spa;
