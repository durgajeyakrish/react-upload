import { configureStore } from "@reduxjs/toolkit";
import store from './Slice'

export default configureStore({
    reducer:{
        payment:store
    }
})