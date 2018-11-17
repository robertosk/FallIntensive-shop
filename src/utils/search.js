export function searchProducts(products, searchQuery) {
  if (searchQuery !== null) {
    return products.filter(
      product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else {
    return products;
  }
}

export function searchUser(users, searchQuery) {
  return users.filter(
    user =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
}
