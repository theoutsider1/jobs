import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OffData } from "../../../Types/Globals";


interface recruiterOffersListState {
    recruiterOffer : OffData[],
}


const initialState : recruiterOffersListState = {
        recruiterOffer : [],
}

export const recruiterOffersSlice= createSlice({

    // The name of the slice
    name : "recruiterOffersList",

    // The initial state of the slice
    initialState,
    
    // The reducers of the slice
    reducers : {
        getRecruiterOffersListState : (state , action : PayloadAction<{recruiterJobs : OffData[]}>)=> {
            state.recruiterOffer = action.payload.recruiterJobs;
        }
    }
})

export const {getRecruiterOffersListState} = recruiterOffersSlice.actions;
export default recruiterOffersSlice.reducer;