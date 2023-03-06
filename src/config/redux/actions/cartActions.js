import {
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  ADD_TO_CART,
  REMOVE_ITEM,
  CLEAR_CART,
} from './types';

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item,
});

export const increaseQuantity = index => ({
  type: INCREASE_QUANTITY,
  payload: index,
});

export const decreaseQuantity = index => ({
  type: DECREASE_QUANTITY,
  payload: index,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
