import T from "prop-types";

export const productType = T.shape({
  id: T.number.isRequired,
  title: T.string.isRequired,
  description: T.string,
  image: T.string,
  price: T.number.isRequired
});
