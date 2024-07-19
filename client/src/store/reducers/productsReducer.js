import { UPDATE_PRODUCTS } from '../../actions';

const initialState = {
  products: [],
  currentCategory: '',
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

export default productsReducer;
