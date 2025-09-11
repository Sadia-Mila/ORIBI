import { createSlice } from '@reduxjs/toolkit'

export const assToCartSlice = createSlice({
  name: 'addToCart',
  initialState: {
    value: [],
  },
  reducers: {
    addtocart: (state, action)=>{
      state.value.push(action.payload);
      let alldata =state.value.find(item=>item.title===action.payload.title)
      if(alldata){
        alldata.quantity+=1;
      }else{
        state.value.push({...action.payload,quantity:1})
      }
      
    },
    
    },
})

export const { addtocart } = assToCartSlice.actions

export default assToCartSlice.reducer