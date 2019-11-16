declare module "newsTypes" {
	export type NewsElement = {
		id: number;
		title: string;
		tags: Array<string>;
		shortDescription: string;
		description: string;
		text: string;
	};
}

declare module "*.png" {
	const content: string;
	export default content;
}

declare module "*.svg" {
	const content: string;
	export default content;
}
