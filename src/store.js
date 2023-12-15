import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "react";
import userSlice from "./userSlice";


export default configureStore({
    reducer:{
        user: userSlice
    }
})