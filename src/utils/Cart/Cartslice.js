import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: 'cartslice',
  initialState: {
    list: []
  },
  reducers: {
    addtocart: (state,action) => {
      const product=action.payload;
      const existing=state.list.find((item)=>item.id===product.id);
      if(existing){
         existing.quantity+=1;
      }
      else{
        state.list.push({...product,quantity:1});
      }
      
    },
    removetocart: (state,action) => {
      state.list = state.list.filter(
        item => item.id !== action.payload)
    },
    decreaseQuantity:(state,action)=>{
      const item=state.list.find((item)=>item.id===action.payload);
      if(item){
        if(item.quantity>1){
          item.quantity=item.quantity-1;
        }
        else{
          state.list = state.list.filter(
        item => item.id !== action.payload)
        }
      }
    },
    clearcart: (state) => {
      state.list=[];
    }
  }
})

// Action creators are generated for each case reducer function
export const { addtocart, removetocart,decreaseQuantity, clearcart } = cartSlice.actions

export default cartSlice.reducer