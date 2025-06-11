export default function productsModule(http) {
  return {
    getProducts: (params = {}) => http.get('/products', { params }),

    searchProducts: ({ searchTerm, limit = 8, type = null }) =>
      http.get('/search', {
        params: {
          'search-term': searchTerm,
          limit,
          ...(type && { type }),
        },
      }),

    getCategories: (limit = 8) =>
      http.get('/categories', { params: { limit } }),
  };
}
