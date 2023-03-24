import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialCartState = {
  showcart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    cartreducer(state) {
      state.showcart = !state.showcart;
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
export const cartAction=cartSlice.actions;
export default store;