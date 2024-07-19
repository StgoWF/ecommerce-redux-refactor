import {
  ADD_TO_CART,
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  CLEAR_CART,
  TOGGLE_CART,
} from '../actions';

const initialState = {
  items: [],
  cartOpen: false,
};

const cartReducer = (state = initialState, action) => {
  console.log("Action received:", action);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.product],
        cartOpen: true, // Asegurarse de que se abre el carrito al añadir
      };
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        items: [...state.items, ...action.products],
      };
    case REMOVE_FROM_CART:
      const newItems = state.items.filter(item => item._id !== action._id);
      return {
        ...state,
        items: newItems,
        cartOpen: newItems.length > 0,
      };
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        items: state.items.map(item => {
          if (item._id === action._id) {
            return { ...item, purchaseQuantity: action.purchaseQuantity };
          }
          return item;
        }),
      };
    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    default:
      return state;
  }
};

export default cartReducer;
