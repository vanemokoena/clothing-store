import { REGISTER_USER, LOGIN_USER, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from './actions';

const initialState = {
  cart: [],
  users: [],
  currentUser: null,
 
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };

    case UPDATE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case REGISTER_USER:
      return { ...state, users: [...state.users, action.payload] };

    case LOGIN_USER:
      return { ...state, currentUser: action.payload };

    case ADD_TO_CART:
      const existingProduct = state.cart.find(item => item.id === action.payload.id);
      if (existingProduct) {
        // If the item is already in the cart, increase its quantity
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If the item is new, add it with a quantity of 1
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    default:
      return state;
  }
};

export default rootReducer;
