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
        getRecruiterOffersList : (state , action : PayloadAction<{recruiterOffer : OffData[]}>)=> {
            state.recruiterOffer = action.payload.recruiterOffer;
            
            
        }
    }
})

export const {getRecruiterOffersList} = recruiterOffersSlice.actions;
export default recruiterOffersSlice.reducer;