import uuid from "uuid";
import { routes } from "../routes";
export const mainNav = [
  {
    id: uuid(),
    title: "products",
    link: routes.productList,
    disabled: false
  },
  {
    id: uuid(),
    title: "Laptops",
    link: "",
    disabled: true
  },
  {
    id: uuid(),
    title: "Smartphones",
    link: "",
    disabled: true
  }
];
export const infoNav = [
  {
    id: uuid(),
    title: "About us",
    link: routes.about
  },
  {
    id: uuid(),
    title: "Contact us",
    link: routes.contactUs
  },
  {
    id: uuid(),
    title: "Privacy Policy",
    link: routes.privacyPolicy
  },
  {
    id: uuid(),
    title: "Orders and Returns",
    link: routes.ordersAndReturns
  },
  {
    id: uuid(),
    title: "Terms & Conditions",
    link: routes.termsAndConditions
  }
];
export const serviceNav = [
  {
    id: uuid(),
    title: "My Account",
    link: routes.userAccount
  },
  {
    id: uuid(),
    title: "View Card",
    link: routes.card
  },
  {
    id: uuid(),
    title: "View Wishlist",
    link: routes.wishList
  }
];
