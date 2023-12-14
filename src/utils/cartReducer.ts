import { ADD_TO_CART, REMOVE_FROM_CART, CartState } from "@/types/reducer";
type CartAction = ADD_TO_CART | REMOVE_FROM_CART;

export const initialState: CartState = {
  total: 0,
  products: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: [action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: [action.payload],
      };

    default:
      return state;
    // throw new error(No case for type ${type} found in cart reducer)
  }
};

export default cartReducer;
