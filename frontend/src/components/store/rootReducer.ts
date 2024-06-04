import { combineReducers } from "@reduxjs/toolkit";
import { jobSlice } from "./features/jobDetailsSlice";
import { whichSpaceIsActiveSlice } from "./features/espaceSlice";
import { recruiterOffersSlice } from "./features/recruiterOffersSlice";
import authSlice from "./features/authSlice";


export const rootReducer = combineReducers({
    getJob : jobSlice.reducer,
    space : whichSpaceIsActiveSlice.reducer,
    recruiterOffersList : recruiterOffersSlice.reducer,
    auth: authSlice,
})
  
