import {createSlice } from '@reduxjs/toolkit'
import cartItems from '../data';


const initialState = {
    cartiems : cartItems,
    amount : 4,
    total : 0,
    isLoading: true,
}

const cartslice = createSlice({
    name : "cart",
    initialState,
    reducers :{
    Clearcart : (state) =>{
        state.cartiems = []
        state.amount = 0
    },
    RemoveItem : (state, action) =>{
       const Itemid = action.payload 
       state.cartiems = state.cartiems.filter((item) => item.id !== Itemid)
    },
    Increase : (state, {payload}) =>{
     const amounts =  state.cartiems.find((item) => item.id === payload.id )
      amounts.amount = amounts.amount + 1
    },
    Decrease : (state, {payload}) =>{
        const amounts =  state.cartiems.find((item) => item.id === payload.id )
         amounts.amount = amounts.amount - 1
    },
    CalculationTotal : (state) =>{
        let total =  0   
        let amount = 0  
        state.cartiems.forEach((item) => {
            amount += item.amount
            total += item.amount * item.price 
        })
        state.amount = amount
        state.total = total
    }
    },
})

export const {Clearcart , Increase, Decrease, RemoveItem, CalculationTotal} = cartslice.actions

export default cartslice.reducer