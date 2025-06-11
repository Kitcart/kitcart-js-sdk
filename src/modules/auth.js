export default function authModule(http) {
  return {
    login: (email, password) =>
      http.post('/login', { email, password }),

    register: (name, email, password, phone_number = null) =>
      http.post('/register', { name, email, password, phone_number }),

    getSelf: () => http.get('/self', { useAuth: true }),
  };
}
// This module provides authentication-related methods for the Kitcart API.
// It includes methods for user login, registration, and fetching the authenticated user's details.
// The methods utilize the provided HTTP client to make requests to the Kitcart API endpoints.
// The `http` parameter is expected to be an instance of the HTTP client configured for the Kitcart API.
//// Example usage:
// const auth = authModule(httpClient);
