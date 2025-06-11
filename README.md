# 📦 Kitcart JS SDK

[![npm version](https://img.shields.io/npm/v/kitcart-sdk?color=blue)](https://www.npmjs.com/package/kitcart-sdk)
[![GitHub stars](https://img.shields.io/github/stars/Kitcart/kitcart-js-sdk?style=social)](https://github.com/Kitcart/kitcart-js-sdk)

A lightweight JavaScript SDK for integrating with the [Kitcart API](https://usekitcart.com).  
Use this to build custom themes, plugins, or full e-commerce frontends with ease.

---

## 🔧 Installation

```bash
npm install kitcart-sdk

```
___

### 🚀 Quick Start

```js

import Kitcart from 'kitcart-sdk';
const kitcart = new Kitcart({
  storeId: 'your_store_id',
  token: 'optional_bearer_token' // You can set it later too
});

```
___

## 🔐 Authentication

```js

// Login
const loginResponse = await kitcart.auth.login(email, password);
kitcart.setToken(loginResponse.token); // set token after login


// Register
await kitcart.auth.register(name, email, password, phone);

// Get logged in user
const user = await kitcart.auth.getSelf();


```
___

## 🛍️ Products & Search


```js

await kitcart.products.getProducts({ limit: 8 });
await kitcart.products.searchProducts({ searchTerm: 'shoes' });
await kitcart.products.getCategories();
```
___

## ❤️ Wishlist
```js

await kitcart.wishlist.getWishlists();
await kitcart.wishlist.toggleWishlist({ product: 1234 });
```
___

## 🛒 Cart
```js

await kitcart.cart.getCart();
await kitcart.cart.updateCart({ product: 1234, quantity: 2 });

```
___

## 📦 Checkout

```js
await kitcart.checkout.getCheckoutData();
await kitcart.checkout.getStatesByCountry(160);
await kitcart.checkout.getDistrictsByState(10);
await kitcart.checkout.getShippingPrice({
  total_amount: 10000,
  country: 160,
});


```
___

## 💰 Payments

```js

await kitcart.payments.getKitpayBanks();
await kitcart.payments.verifyFlutterwave(orderId, reference);
await kitcart.payments.verifyPaystack(orderId, reference);

```
___

## 📑 Orders

```js

await kitcart.orders.createOrder({
  id: 'store_id',
  cart: [{ product: 1, quantity: 2 }],
  payment_method: 1,
  shipping_method: 3
});
await kitcart.orders.getOrders();

```
___

## 🧾 Billing

```js

await kitcart.billing.createBilling({
  name: 'John Doe',
  phone_number: '08012345678',
  delivery_address: '123 Street',
  country: 160,
});
await kitcart.billing.getBillings();

```
___
## 📝 Blog & Comments
```js

await kitcart.blog.getBlogs({ limit: 5 });
await kitcart.blog.postComment(blogId, 'Great post!', 5);
```
___
## 🏬 Store
```js
await kitcart.store.getStoreDetails();
await kitcart.store.submitContactForm({
  name: 'John Doe',
  phone_number: '08012345678',
  email_address: 'john@example.com',
  subject: 'Inquiry',
  message: 'Hello!',
});
```
___
## 📌 Token Management
```js

kitcart.setToken('Bearer YOUR_TOKEN');
kitcart.clearToken();
```
___
## 🧪 Local Test File
Run node test.js to try sample API calls from your own store.
___

## 🛠️ Contributing
Pull requests and suggestions welcome. Make sure to keep modules modular and light.

