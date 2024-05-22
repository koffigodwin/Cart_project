import { createSlice } from "@reduxjs/toolkit";
import Model from "../Model";

const initialState = {
    IsOpen : false
}

const CreateSlice =  createSlice({
    name : "model",
    initialState,
    reducers :{
      ModelOpen : (state, action) =>{
        state.IsOpen = true
      },
      ModelClose : (state, action) =>{
        state.IsOpen = false
      }
    }
})

export const {ModelClose, ModelOpen} = CreateSlice.actions

export default CreateSlice.reducer