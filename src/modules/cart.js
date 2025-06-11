export default function cartModule(http) {
  return {
    updateCart: ({ product, quantity = 1, combination = null }) =>
      http.post(
        '/update-cart',
        { product, quantity, combination },
        { useAuth: true }
      ),

    getCart: () => http.get('/get-cart', { useAuth: true }),
  };
}
