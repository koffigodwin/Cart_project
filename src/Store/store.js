import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartslice'
import modelslice from './modelslice'



export const store = configureStore({
    reducer:{
        cart : cartReducer,
        modal : modelslice
    }
})