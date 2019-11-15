import Router from "koa-router";
import { Context, Next } from "koa";

module.exports = ({ router }: { router: Router }) => {
	router.all("/", (ctx: Context) => {
		return {
			status: 200
		};
	});
};
