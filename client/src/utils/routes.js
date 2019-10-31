const Home = React.lazy(() => import("@components/home/Home"));
const Products = React.lazy(() => import("@components/products/Products"));
const About = React.lazy(() => import("@components/about/About"));
const Shipping = React.lazy(() => import("@components/shipping/Shipping"));
const Contact = React.lazy(() => import("@components/contact/Contact"));
const routes = [
  {
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: "Products",
    path: "products",
    component: Products,
    dropLinks: [
      {
        name: "Luxury",
        path: "products/luxury"
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
    path: "shipping",
    component: Shipping
  },
  {
    name: "About",
    path: "about",
    component: About
  },
  {
    name: "Contact",
    path: "contact",
    component: Contact
  }
];

export default routes;
