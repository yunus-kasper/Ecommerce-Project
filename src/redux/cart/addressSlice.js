import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage so address persists even after refresh
const loadFromStorage = () => {
  try {
    const saved = localStorage.getItem("addresses");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const loadSelectedAddress = () => {
  try {
    const saved = localStorage.getItem("selectedAddress");
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
};

const initialState = {
  addresses: loadFromStorage(),       // list of saved addresses
  selectedAddress: loadSelectedAddress() // currently chosen delivery address
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addAddress: (state, { payload }) => {
      // if marked as default, unset default on others
      if (payload.isDefault) {
        state.addresses.forEach(addr => (addr.isDefault = false));
      }
      state.addresses.push(payload);

      localStorage.setItem("addresses", JSON.stringify(state.addresses));

      // auto-select if it's default
      if (payload.isDefault) {
        state.selectedAddress = payload;
        localStorage.setItem("selectedAddress", JSON.stringify(payload));
      }
    },

    removeAddress: (state, { payload }) => {
      state.addresses = state.addresses.filter(addr => addr.id !== payload);

      localStorage.setItem("addresses", JSON.stringify(state.addresses));

      // if deleted was selected address, clear or fallback to default
      if (state.selectedAddress?.id === payload) {
        const defaultAddr = state.addresses.find(addr => addr.isDefault);
        state.selectedAddress = defaultAddr || null;
        localStorage.setItem(
          "selectedAddress",
          JSON.stringify(state.selectedAddress)
        );
      }
    },

    updateAddress: (state, { payload }) => {
      const index = state.addresses.findIndex(addr => addr.id === payload.id);
      if (index !== -1) {
        // if updating to default, unset others
        if (payload.isDefault) {
          state.addresses.forEach(addr => (addr.isDefault = false));
        }
        state.addresses[index] = payload;

        localStorage.setItem("addresses", JSON.stringify(state.addresses));

        // if updating currently selected address
        if (state.selectedAddress?.id === payload.id || payload.isDefault) {
          state.selectedAddress = payload;
          localStorage.setItem("selectedAddress", JSON.stringify(payload));
        }
      }
    },

    selectAddress: (state, { payload }) => {
      state.selectedAddress = payload;
      localStorage.setItem("selectedAddress", JSON.stringify(payload));
    },

    clearSelectedAddress: (state) => {
      state.selectedAddress = null;
      localStorage.removeItem("selectedAddress");
    }
  }
});

export const {
  addAddress,
  removeAddress,
  updateAddress,
  selectAddress,
  clearSelectedAddress
} = addressSlice.actions;

export default addressSlice.reducer;
