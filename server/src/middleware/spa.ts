import fs from "fs";
import send from "koa-send";

import { Context, Next } from "koa";

export default function spa(root: string) {
	let origin: string;
	return async function singlePageApplication(ctx: Context, next: Next) {
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
