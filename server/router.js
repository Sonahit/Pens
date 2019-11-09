const Router = require("koa-router");
const webRouter = new Router({
  prefix: "/"
});
const apiRouter = new Router({
  prefix: "/api/v1"
});

module.exports = ({ app }) => {
  require(`${__dirname}/routes/api.js`)({ router: apiRouter });
  require(`${__dirname}/routes/web.js`)({ router: webRouter });

  app.use(apiRouter.routes(), apiRouter.allowedMethods());
  app.use(webRouter.routes(), webRouter.allowedMethods());
};
