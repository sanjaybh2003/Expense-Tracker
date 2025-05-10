import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/expenses',
});

export const fetchExpenses = () => API.get('/');
export const createExpense = (expenseData) => API.post('/', expenseData);
export const deleteExpense = (id) => API.delete(`/${id}`);
