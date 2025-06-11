export default function ordersModule(http) {
  return {
    createOrder: ({
      id,
      cart,
      payment_method,
      billing = null,
      coupons = [],
      shipping_method = null,
      notes = null,
    }) =>
      http.post(
        `/${id}/create-order`,
        {
          cart,
          payment_method,
          billing,
          coupons,
          shipping_method,
          notes,
        },
        { useAuth: true }
      ),

    getOrders: () => http.get('/orders', { useAuth: true }),
  };
}
