import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialCartState = {
  showcart: false,
};
const initialitemState = {
  cartitem: [],
  totalquantity: 0,
  totalprice: 0,
};

const cartSlice = createSlice({
  name: "cartitem",
  initialState: initialCartState,
  reducers: {
    cartreducer(state) {
      state.showcart = !state.showcart;
    },
  },
});
const itemSlice = createSlice({
  name: "cartitem",
  initialState: initialitemState,
  reducers: {
    additemtocart(state, action) {
      const item = action.payload;
      const existitem = state.cartitem.find((i) => i.id === item.id);
      if (!existitem) {
        state.cartitem.push(item);
        state.totalprice = state.totalprice + Number(item.price);
      } else {
        existitem.quantity++;
        existitem.totalprice = existitem.totalprice + Number(item.price);
      }
    },
    removecartitem(state, action) {
      const item = action.payload;
      const existitem = state.cartitem.find((i) => i.id === item.id);
      if (existitem) {
        if (existitem.quantity > 1) {
          existitem.quantity--;
          existitem.totalprice = existitem.totalprice - Number(item.price);
        } else {
          state.cartitem = state.cartitem.filter((i) => i.id !== item.id);
        }
      }
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartitem: itemSlice.reducer,
  },
});
export const cartAction = cartSlice.actions;
export const cartitemAction = itemSlice.actions;
export default store;
