import Application from "koa";
import Router from "koa-router";
const webRouter: Router = new Router({
	prefix: "/"
});
const apiRouter: Router = new Router({
	prefix: "/api/v1"
});

module.exports = ({ app }: { app: Application }) => {
	require(`${__dirname}/routes/api`)({ router: apiRouter });
	require(`${__dirname}/routes/web`)({ router: webRouter });

	app.use(apiRouter.routes());
	app.use(apiRouter.allowedMethods());
	app.use(webRouter.routes());
	app.use(webRouter.allowedMethods());
};
