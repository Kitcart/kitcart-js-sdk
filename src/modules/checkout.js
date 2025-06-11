export default function checkoutModule(http) {
  return {
    getCheckoutData: () =>
      http.get('/checkout', { useAuth: true }),

    getStatesByCountry: (countryId) =>
      http.get('/get-states', {
        params: { country: countryId },
      }),

    getDistrictsByState: (stateId) =>
      http.get('/get-districts', {
        params: { state: stateId },
      }),

    getShippingPrice: ({ total_amount, country, weight = 0, state, district }) =>
      http.get('/get-shipping-price', {
        params: {
          total_amount,
          country,
          weight,
          ...(state && { state }),
          ...(district && { district }),
        },
      }),
  };
}
