import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:2024'
});

export const getBooks = () => api.get('/books');
export const saveBook = (book) => api.post('/book', book);
export const getCustomers = () => api.get('/customers');
export const saveCustomer = (customer) => api.post('/customer', customer);

export default api;
