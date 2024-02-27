import { combineReducers } from "@reduxjs/toolkit";
import { jobSlice } from "./features/jobDetailsSlice";
import { whichSpaceIsActiveSlice } from "./features/espaceSlice";


export const rootReducer = combineReducers({
    getJob : jobSlice.reducer,
    space : whichSpaceIsActiveSlice.reducer,
})
  
