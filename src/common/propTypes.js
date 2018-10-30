import T from "prop-types";

export const productType = {
  id: T.string.isRequired,
  title: T.string.isRequired,
  description: T.string,
  image: T.string,
  price: T.number.isRequired
};
