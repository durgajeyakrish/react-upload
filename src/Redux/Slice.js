import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:'sample',
    initialState:{
        isAuthenticated: false,
        payment:[],

    },
    reducers:{
        payment:(state,action) =>{
            state.payment=action.payload;
        }
    },
});

export const {payment}= slice.actions;

export default slice.reducer;
