import { combineReducers } from "@reduxjs/toolkit";
import { jobSlice } from "./features/jobDetailsSlice";
import { whichSpaceIsActiveSlice } from "./features/espaceSlice";
import { recruiterOffersSlice } from "./features/recruiterOffersSlice";
import authReducer from "./features/authSlice";
import { editedJobSlice } from "./features/editJobSlice";


export const rootReducer = combineReducers({
    getJob : jobSlice.reducer,
    space : whichSpaceIsActiveSlice.reducer,
    recruiterOffersList : recruiterOffersSlice.reducer,
    auth: authReducer,
    editJob : editedJobSlice.reducer,
    
})
  
