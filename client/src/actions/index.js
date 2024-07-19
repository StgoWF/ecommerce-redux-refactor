export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
export const UPDATE_CURRENT_CATEGORY = 'UPDATE_CURRENT_CATEGORY';
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_CART = 'TOGGLE_CART';
export const SET_USER = 'SET_USER';
export const SET_PRODUCTS = 'SET_PRODUCTS';

// Action creators
export const updateProducts = (products) => ({
  type: UPDATE_PRODUCTS,
  payload: products,
});

export const updateCategories = (categories) => ({
  type: UPDATE_CATEGORIES,
  payload: categories,
});

export const updateCurrentCategory = (currentCategory) => ({
  type: UPDATE_CURRENT_CATEGORY,
  payload: currentCategory,
});

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const addMultipleToCart = (items) => ({
  type: ADD_MULTIPLE_TO_CART,
  payload: items,
});

export const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

export const updateCartQuantity = (item, quantity) => ({
  type: UPDATE_CART_QUANTITY,
  payload: { item, quantity },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});
