export default function billingModule(http) {
  return {
    createBilling: ({
      name,
      phone_number,
      delivery_address,
      country,
      state = null,
      district = null,
      city = null,
    }) =>
      http.post(
        '/create-billing',
        {
          name,
          phone_number,
          delivery_address,
          country,
          state,
          district,
          city,
        },
        { useAuth: true }
      ),

    // Endpoint to get billing addresses assumed to be `/billings`
    getBillings: () => http.get('/billings', { useAuth: true }),
  };
}
