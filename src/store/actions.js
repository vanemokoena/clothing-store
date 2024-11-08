
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export const registerUser = (user) => ({ type: REGISTER_USER, payload: user });
export const loginUser = (username) => ({ type: LOGIN_USER, payload: username });
export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });

export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});
  
export const updateQuantity = (productId, quantity) => ({
    type: UPDATE_QUANTITY,
    payload: { productId, quantity },
});
