📦 Kitcart JS SDK
A lightweight JavaScript SDK for integrating with the Kitcart API. Use this to build custom themes, plugins, or full e-commerce frontends with ease.


🔧 Installation

npm install kitcart-js-sdk
Or, if you're not publishing yet, clone locally:


git clone https://github.com/yourusername/kitcart-js-sdk.git
cd kitcart-js-sdk
npm install


🚀 Quick Start

import Kitcart from 'kitcart-js-sdk'; // or from './src/index.js' in local dev

const kitcart = new Kitcart({
  storeId: 'your_store_id',
  token: 'optional_bearer_token' // You can set it later too
});



🔐 Authentication


// Login
const loginResponse = await kitcart.auth.login(email, password);
kitcart.setToken(loginResponse.token); // set token after login


// Register
await kitcart.auth.register(name, email, password, phone);

// Get logged in user
const user = await kitcart.auth.getSelf();
🛍️ Products & Search


await kitcart.products.getProducts({ limit: 8 });
await kitcart.products.searchProducts({ searchTerm: 'shoes' });
await kitcart.products.getCategories();
❤️ Wishlist


await kitcart.wishlist.getWishlists();
await kitcart.wishlist.toggleWishlist({ product: 1234 });
🛒 Cart


await kitcart.cart.getCart();
await kitcart.cart.updateCart({ product: 1234, quantity: 2 });
📦 Checkout


await kitcart.checkout.getCheckoutData();
await kitcart.checkout.getStatesByCountry(160);
await kitcart.checkout.getDistrictsByState(10);
await kitcart.checkout.getShippingPrice({
  total_amount: 10000,
  country: 160,
});
💰 Payments


await kitcart.payments.getKitpayBanks();
await kitcart.payments.verifyFlutterwave(orderId, reference);
await kitcart.payments.verifyPaystack(orderId, reference);


📑 Orders

await kitcart.orders.createOrder({
  id: 'store_id',
  cart: [{ product: 1, quantity: 2 }],
  payment_method: 1,
  shipping_method: 3
});
await kitcart.orders.getOrders();
🧾 Billing
js

await kitcart.billing.createBilling({
  name: 'John Doe',
  phone_number: '08012345678',
  delivery_address: '123 Street',
  country: 160,
});
await kitcart.billing.getBillings();
📝 Blog & Comments
js

await kitcart.blog.getBlogs({ limit: 5 });
await kitcart.blog.postComment(blogId, 'Great post!', 5);
📌 Token Management
js

kitcart.setToken('Bearer YOUR_TOKEN');
kitcart.clearToken();
🧪 Local Test File
Run node test.js to try sample API calls from your own store.

🛠️ Contributing
Pull requests and suggestions welcome. Make sure to keep modules modular and light.

