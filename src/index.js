import createHttpClient from "./http.js";
import authModule from "./modules/auth.js";
import productsModule from "./modules/products.js";
import wishlistModule from "./modules/wishlist.js";
import cartModule from "./modules/cart.js";
import checkoutModule from "./modules/checkout.js";
import paymentsModule from './modules/payments.js';
import ordersModule from './modules/orders.js';
import billingModule from './modules/billing.js';
import blogModule from './modules/blog.js';
import storeModule from './modules/store.js';


export default class Kitcart {
  constructor({ storeId, token = null }) {
    if (!storeId) throw new Error("storeId is required");

    this.http = createHttpClient({ storeId });

    if (token) {
      this.http.setToken(token);
    }

    this.auth = authModule(this.http);
    this.products = productsModule(this.http);
    this.wishlist = wishlistModule(this.http);
    this.cart = cartModule(this.http);
    this.checkout = checkoutModule(this.http);
    this.payments = paymentsModule(this.http);
    this.orders = ordersModule(this.http);
    this.billing = billingModule(this.http);
    this.blog = blogModule(this.http);
    this.store = storeModule(this.http);
  }

  setToken(token) {
    this.http.setToken(token);
  }

  clearToken() {
    this.http.clearToken();
  }
}
