// redux/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Helpers to load/save
const loadCartFromStorage = () => {
  try {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveCartToStorage = (cartItems) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  } catch {}
};

// Pull in existing items
const savedItems = loadCartFromStorage();

// Pre‑compute totals
const initialState = {
  cartItems: savedItems,
  totalItems: savedItems.reduce((sum, i) => sum + i.quantity, 0),
  totalPrice: savedItems.reduce((sum, i) => sum + i.basePrice * i.quantity, 0),
  totalDiscount: savedItems.reduce(
    (sum, i) => sum + ((i.basePrice * i.discountPercent) / 100) * i.quantity,
    0
  ),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    syncCart: (state) => {
      state.totalItems = state.cartItems.reduce(
        (sum, i) => sum + i.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (sum, i) => sum + i.basePrice * i.quantity,
        0
      );
      state.totalDiscount = state.cartItems.reduce(
        (sum, i) =>
          sum + ((i.basePrice * i.discountPercent) / 100) * i.quantity,
        0
      );
      saveCartToStorage(state.cartItems);
    },
    addToCart: (state, { payload: item }) => {
      const ex = state.cartItems.find((i) => i.title === item.title);
      ex
        ? ex.quantity++
        : state.cartItems.push({
            ...item,
            quantity: 1,
          });
      cartSlice.caseReducers.syncCart(state);
    },
    addMultipleItemToCart: (state, { payload }) => {
      const { product, quantity = 1 } = payload;
      const ex = state.cartItems.find((i) => i.title === product.title);

      if (ex) {
        ex.quantity += quantity; // add passed quantity
      } else {
        state.cartItems.push({ ...product, quantity });
      }

      cartSlice.caseReducers.syncCart(state);
    },
    removeFromCart: (state, { payload: item }) => {
      state.cartItems = state.cartItems.filter((i) => i.title !== item.title);
      cartSlice.caseReducers.syncCart(state);
    },
    increaseQty: (state, { payload: item }) => {
      const ex = state.cartItems.find((i) => i.title === item.title);
      if (ex) ex.quantity++;
      cartSlice.caseReducers.syncCart(state);
    },
    decreaseQty: (state, { payload: item }) => {
      const ex = state.cartItems.find((i) => i.title === item.title);
      if (ex?.quantity > 1) ex.quantity--;
      else
        state.cartItems = state.cartItems.filter((i) => i.title !== item.title);
      cartSlice.caseReducers.syncCart(state);
    },
    clearCart: (state) => {
      state.cartItems = [];
      cartSlice.caseReducers.syncCart(state);
    },
  },
});

export const {
  syncCart,
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  addMultipleItemToCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
