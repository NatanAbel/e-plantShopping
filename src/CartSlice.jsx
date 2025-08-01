import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload
        const itemExist = state.items.find(item => item.name === name)
        if(itemExist){
            itemExist.quantity++
        }else{
            state.items.push({name,image,cost,quantity:1})
        }
    
    },
    removeItem: (state, action) => {
        const {name} = action.payload
        const itemChecked = state.items.some(item => item.name === name)
        if(itemChecked){
            const itemToremove = state.items.filter(item => item.name !== name)
            return itemToremove
        }
    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload

        const itemToUpdate = state.items.find(item => item.name === name)

        if(itemToUpdate){
            itemToUpdate.quantity = quantity
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
