import fs from "fs";
import send from "koa-send";
import { red } from "colors";

import { Context, Next } from "koa";

export default function spa(root: string) {
	let origin: string;
	return async function singlePageApplication(ctx: Context, next: Next) {
		const { url, status } = ctx;
		try {
			if (!origin) origin = ctx.path.match(/^\/\w+/gi)[0];
		} catch (err) {
			console.log(`--> Wrong path ${red(ctx.path)}`);
		}
		if (status === 404) {
			const path = url.split(origin)[1];
			if (fs.existsSync(`${root}/${path}`) && path) {
				const match: string[] = path.match(/\.\w+$/gi) || [];
				const extension = match[0] || "";
				await send(ctx, path, { root, extensions: [extension] });
			} else {
				await send(ctx, "index.html", { root });
			}
		}
		await next();
	};
}
