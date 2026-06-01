import { createSlice } from '@reduxjs/toolkit';

const loadRecentlyViewed = () => {
  try {
    const item = localStorage.getItem('orebi_recently_viewed');
    return item ? JSON.parse(item) : [];
  } catch {
    return [];
  }
};

const saveRecentlyViewed = (value) => {
  try {
    localStorage.setItem('orebi_recently_viewed', JSON.stringify(value));
  } catch {
    // ignore
  }
};

export const recentlyViewedSlice = createSlice({
  name: 'recentlyViewed',
  initialState: {
    value: loadRecentlyViewed(),
  },
  reducers: {
    addRecentlyViewed: (state, action) => {
      const item = action.payload;
      state.value = state.value.filter((product) => product.id !== item.id);
      state.value.unshift(item);
      if (state.value.length > 8) {
        state.value.pop();
      }
      saveRecentlyViewed(state.value);
    },
  },
});

export const { addRecentlyViewed } = recentlyViewedSlice.actions;
export default recentlyViewedSlice.reducer;
