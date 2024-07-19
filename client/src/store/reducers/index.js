// src/store/reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';
import userReducer from './userReducer';
import categoriesReducer from './categoriesReducer'; // Asegúrate de importar esto

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  user: userReducer,
  categories: categoriesReducer, // Asegúrate de agregar esto
});

export default rootReducer;
