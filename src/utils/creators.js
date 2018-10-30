import uuid from "uuid";
export const createProduct = value => ({
  id: uuid(),
  title: "",
  description: "",
  image: "",
  price: 0
});
