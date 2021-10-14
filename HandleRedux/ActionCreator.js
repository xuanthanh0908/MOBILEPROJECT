import { ADD_CART, DELETE_CART } from '../HandleRedux/types';

export const addCart = (Cart) => (
  {
    type: ADD_CART,
    data: Cart
  }
);

export const deleteCart = (key) => (
  {
    type: DELETE_CART,
    key: key
  }
);