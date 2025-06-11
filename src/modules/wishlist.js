export default function wishlistModule(http) {
  return {
    getWishlists: (limit = 8) =>
      http.get('/wishlists', {
        params: { limit },
        useAuth: true,
      }),

    toggleWishlist: ({ product, combination = null }) =>
      http.post(
        '/toggle-wishlist',
        { product, combination },
        { useAuth: true }
      ),
  };
}
