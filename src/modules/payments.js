export default function paymentsModule(http) {
  return {
    getKitpayBanks: () =>
      http.get('/get-kitpay-banks', { useAuth: true }),

    verifyFlutterwave: (orderId, reference) =>
      http.post(
        `/verify/flutterwave/${orderId}`,
        { reference },
        { useAuth: true }
      ),

    verifyPaystack: (orderId, reference) =>
      http.post(
        `/verify/paystack/${orderId}`,
        { reference },
        { useAuth: true }
      ),
  };
}
