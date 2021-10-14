
const cartItems = (state = [], action) => {
  switch (action.type) {
      case 'ADD_CART':
          return [...state, action.payload]
      case 'DELETE_CART':
          return state.filter(cartItem => cartItem.id !== action.payload.id)
  }
  return state
}

export default cartItems