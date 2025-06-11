export default function storeModule(http) {
  return {
    getStoreDetails: () => http.get('/'),

    submitContactForm: ({ name, phone_number, email_address, subject, message }) =>
      http.post('/contact-form', {
        name,
        phone_number,
        email_address,
        subject,
        message,
      }),
  };
}
