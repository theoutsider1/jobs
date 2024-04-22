import { PayloadAction, createSlice } from "@reduxjs/toolkit";
//import { OfferData } from "../../../Types/Globals";
import { offerEmploi } from "./dataShapes/dataInterfaces";


interface jobState {
    job: offerEmploi[],
}

const initialState: jobState ={
        job: [],
}

export const jobSlice = createSlice({

    // The name of the slice
    name: "clickedJob",

    // The initial state of the slice
    initialState,
    
    // The reducers of the slice
    reducers: {
        getJob : (state, action:PayloadAction<{job : offerEmploi[]}>)=> {

                state.job = action.payload.job;

        }
    }
})

export const { getJob } = jobSlice.actions;

export default jobSlice.reducer;