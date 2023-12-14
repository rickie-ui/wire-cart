export interface CartItem {
  id: string;
  name: string;
  quantity: number;
}

export interface CartState {
  total: number;
  products: CartItem[];
}

export type ADD_TO_CART = {
  type: "ADD_TO_CART";
  payload: CartItem;
};
export type REMOVE_FROM_CART = {
  type: "REMOVE_FROM_CART";
  payload: CartItem;
};
