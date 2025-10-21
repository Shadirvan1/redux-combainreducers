import {configureStore, createSlice }  from "@reduxjs/toolkit"
import logger from "redux-logger";
import { Fetch } from "./api";
import { createSelector } from "@reduxjs/toolkit";
const fetchSlice = createSlice({
  name:"users",
  initialState:{data:[],loading:false,error:null},
  reducers:{
    edit:(state,action)=>{
      const user =state.data.filter(u=>u.id !== action.payload)
          state.data = user
    }
  },

  extraReducers:(builder)=>{
    builder
    .addCase(Fetch.pending,(state)=>{
      state.loading =true;
      state.error=null;
    })
    .addCase(Fetch.fulfilled,(state,action)=>{

      state.loading = false;
      state.data = action.payload;
    })
    .addCase(Fetch.rejected,(state,action)=>{
      state.loading=false;
      state.error = action.payload;
    })
  }
})


const counterSlice = createSlice({
name:"counter",
initialState:{value:0},
reducers:{
  increment:(state)=>{state.value++},
  decrement:(state)=>{state.value--},

}

})
const selectUser =state =>state.users.data

export const selectComplete = createSelector(
  [selectUser],
  (users)=>users.filter(user=>user.complete)
)
export const {edit}=fetchSlice.actions;
export const {increment,decrement}=counterSlice.actions;

export const store = configureStore({
  reducer:{
  counter:counterSlice.reducer,
  users:fetchSlice.reducer,
},
middleware:(middleware)=>
middleware().concat(logger)

})



