// PURE FUNCTIONS
// Same input => same output. No mutation of the original data.

export const trimName = (name) => name.trim();

export const capitalizeWords = (name) =>
  name.replace(/\b\w/g, (char) => char.toUpperCase());

// FUNCTION COMPOSITION
// compose(f, g)(value) means f(g(value))
export const compose = (f, g) => (value) => f(g(value));

export const formatProductName = compose(capitalizeWords, trimName);

export const filterProducts = (products, search, category) =>
  products.filter((product) => {
    const formattedName = formatProductName(product.name);
    const matchesSearch = formattedName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

export const calculateCartTotal = (cart) =>
  cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export const calculateItemCount = (cart) =>
  cart.reduce((count, item) => count + item.quantity, 0);

export const addProductToCart = (cart, product) => {
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    return cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cart, { ...product, quantity: 1 }];
};

export const updateQuantity = (cart, productId, change) =>
  cart
    .map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + change }
        : item
    )
    .filter((item) => item.quantity > 0);

export const removeFromCart = (cart, productId) =>
  cart.filter((item) => item.id !== productId);
