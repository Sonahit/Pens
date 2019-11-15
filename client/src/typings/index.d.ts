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
