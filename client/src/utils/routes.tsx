import React from "react";

const Home = React.lazy(() => import("@components/home/Home"));
const Products = React.lazy(() => import("@components/products/Products"));
const About = React.lazy(() => import("@components/about/About"));
const Shipping = React.lazy(() => import("@components/shipping/Shipping"));
const Contact = React.lazy(() => import("@components/contact/Contact"));
const News = React.lazy(() => import("@components/news/News"));

export type ShortRoute = {
  readonly name: string;
  readonly path: string;
};

export interface RouteConfig extends ShortRoute {
  readonly isExact: boolean;
  component: React.LazyExoticComponent<(props: any) => JSX.Element>;
  readonly dropLinks?: Array<ShortRoute>;
}

export interface RouteArray extends Array<RouteConfig> {}

const routes: RouteArray = [
  {
    name: "Home",
    path: "/",
    component: Home,
    isExact: true
  },
  {
    name: "Products",
    path: "/products",
    component: Products,
    isExact: true,
    dropLinks: [
      {
        name: "Luxury",
        path: "/products/luxury"
      },
      {
        name: "Lorem Ipsum",
        path: "#"
      },
      {
        name: "Lorem Ipsum",
        path: "#"
      }
    ]
  },
  {
    name: "Shipping",
    path: "/shipping",
    component: Shipping,
    isExact: true
  },
  {
    name: "News",
    path: "/news",
    component: News,
    isExact: false
  },
  {
    name: "About",
    path: "/about",
    component: About,
    isExact: true
  },
  {
    name: "Contact",
    path: "/contact",
    component: Contact,
    isExact: true
  }
];

export default routes;
