import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    coupon: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload || {};
      const normalizedId = product._id || product.id;
      if (!normalizedId) return;

      const normalizedProduct = {
        ...product,
        id: normalizedId,
        title: product.title || product.name || "Product",
        thumbnail: product.thumbnail || product.image || "",
        price: Number(product.price) || 0,
        weightKg: Number(product.weightKg ?? product.weight ?? 0) || 0,
      };
      // check already ache কিনা
      const existingItem = state.items.find((item) => item.id === normalizedId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...normalizedProduct, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      if (!state.items.length) state.coupon = null;
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    clearCart: (state) => {
      state.items = [];
      state.coupon = null;
    },
    applyCoupon: (state, action) => {
      state.coupon = action.payload || null;
    },
    clearCoupon: (state) => {
      state.coupon = null;
    },
  },
});


export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  applyCoupon,
  clearCoupon,
} = addToCartSlice.actions;
export default addToCartSlice.reducer;
