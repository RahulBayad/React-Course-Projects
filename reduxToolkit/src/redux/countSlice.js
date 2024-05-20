import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counts : 10
}

const countSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        addCount : (state , action) =>{
            state.counts += 1
        },
        removeCount : (state , action) =>{
            state.counts -= 1
        }
    }

})

export const {addCount , removeCount} = countSlice.actions;

export default countSlice.reducer
