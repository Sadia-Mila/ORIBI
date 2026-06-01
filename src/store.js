import { configureStore } from '@reduxjs/toolkit';
import addtocart from '/src/components/slices/addToCartSlice';
import counterReducer from '/src/components/slices/counterSlice';
import recentlyViewedReducer from '/src/components/slices/recentlyViewedSlice';
import wishlistReducer from '/src/components/slices/wishlistSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: addtocart,
    wishlist: wishlistReducer,
    recentlyViewed: recentlyViewedReducer,
  },
});