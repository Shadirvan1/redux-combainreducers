import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const  Fetch = createAsyncThunk(
    "user/fetchuser",
    async()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users") 
        const data = await response.data
        return data
    }
)