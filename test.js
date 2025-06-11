import Kitcart from './src/index.js';

// Replace 'demo_store_id' with your actual store ID to test with real data.
const kitcart = new Kitcart({ storeId: 'demo_store_id' });

async function main() {
  try {
    const response = await kitcart.products.getProducts({ limit: 2 });
    console.log('Products:', response.data);
  } catch (err) {
    console.error('Error calling API:', err.message);
  }
}

main();
