import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    count:0,
    incrementValue:1,
    user : null,
    loading:false
}


export const fetchUserById = createAsyncThunk(
    'counter/fetchById',
    async (payload) => {
        try {
            console.log(payload);
            // const response = await (await axios.post(`https://jsonplaceholder.typicode.com/posts/`,payload)).data
            const response = await (await axios.get(`https://jsonplaceholder.typicode.com/photos/1`)).data
            return response
        } catch (error) {
            console.log(error);
        }
      
    }
  )

export const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    incrementActionToolkit: (state,action) => {
      console.log(action.type);
      console.log(action.payload);
      state.count += action.payload 
    },
    decrementActionToolkit: (state,action) => {
      state.count -= action.payload || 1
    },
    incrementValueActionToolkit: (state, action) => {
      state.incrementValue = action.payload
    },
  },
  extraReducers:{
    [fetchUserById.fulfilled]:(state,action)=>{
        console.log("response successfull");
        state.user = action.payload;
        state.loading = false;
    },
    [fetchUserById.rejected]:(state,action)=>{
        alert("API failed");
        state.user = null;
        state.loading = false;
    },
    [fetchUserById.pending]:(state,action)=>{
        state.loading = true
        console.log("loading");
    }
  }
})


// ActionToolkit creators are generated for each case reducer function
export const { incrementActionToolkit, decrementActionToolkit, incrementValueActionToolkit } = counterSlice.actions

export default counterSlice.reducer