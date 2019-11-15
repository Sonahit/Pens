import Router from "koa-router";
import { Context, Next } from "koa";

module.exports = ({ router }: { router: Router }) => {
	router.all("/", async (ctx: Context, next: Next) => {
		next();
	});
};
