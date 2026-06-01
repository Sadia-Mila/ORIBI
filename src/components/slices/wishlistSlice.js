import { createSlice } from '@reduxjs/toolkit';

const loadWishlist = () => {
  try {
    const item = localStorage.getItem('orebi_wishlist');
    return item ? JSON.parse(item) : [];
  } catch {
    return [];
  }
};

const saveWishlist = (value) => {
  try {
    localStorage.setItem('orebi_wishlist', JSON.stringify(value));
  } catch {
    // ignore
  }
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    value: loadWishlist(),
  },
  reducers: {
    toggleWishlist: (state, action) => {
      const existing = state.value.find((item) => item.id === action.payload.id);
      if (existing) {
        state.value = state.value.filter((item) => item.id !== action.payload.id);
      } else {
        state.value.push(action.payload);
      }
      saveWishlist(state.value);
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
