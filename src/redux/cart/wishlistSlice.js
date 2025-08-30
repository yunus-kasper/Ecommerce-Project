import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const loadWishlistFromStorage = () => {
  try {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveWishlistToStorage = (wishlistItems) => {
  try {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  } catch {}
};

const savedItems = loadWishlistFromStorage();

const initialState = {
  wishlistItems: savedItems,
  totalItems: savedItems.length,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    syncWishlist: (state) => {
      state.totalItems = state.wishlistItems.length;
      saveWishlistToStorage(state.wishlistItems);
    },
    addToWishlist: (state, { payload: item }) => {
      const exists = state.wishlistItems.some((i) => i.uuid === item.uuid);
      if (!exists) {
        state.wishlistItems.push(item);
        toast.success("Added to favourites");
      }
      wishlistSlice.caseReducers.syncWishlist(state);
    },
    removeFromWishlist: (state, { payload: item }) => {
      state.wishlistItems = state.wishlistItems.filter(
        (i) => i.uuid !== item.uuid
      );
      wishlistSlice.caseReducers.syncWishlist(state);
    },
    clearWishlist: (state) => {
      state.wishlistItems = [];
      wishlistSlice.caseReducers.syncWishlist(state);
    },
  },
});

export const {
  syncWishlist,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
