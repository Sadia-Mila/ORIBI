import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '/src/components/slices/counterSlice'
import   addtocart  from '/src/components/slices/assToCartSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    cart : addtocart,
  },
})