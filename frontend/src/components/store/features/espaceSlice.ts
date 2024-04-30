import {  createSlice } from "@reduxjs/toolkit";
import { whichSpaceIsActive } from "../../../Types/Globals";





// Create the initial state of the counter

const initialState: whichSpaceIsActive={
    recruteurSpace: false,
    candidatSpace: true,
}

// Create the slice of the state
export const whichSpaceIsActiveSlice = createSlice({

     // The name of the slice
    name: "activeSpace",

    // The initial state of the slice
    initialState,

    // The reducers of the slice
    reducers: {

        // turn recruteurIsAtiveAction true when the recruteurIsAtiveAction action is dispatched

        recruteurIsAtiveAction: (state)=> {
            state.recruteurSpace = true;
            state.candidatSpace=false;
        },

        // turn candidatIsAtiveAction true when the recruteurIsAtiveAction action is dispatched

        candidatIsAtiveAction: (state)=> {
            state.candidatSpace=true;
            state.recruteurSpace = false;
            
        }
    }
});

// Export the actions of the slice

export const {recruteurIsAtiveAction , candidatIsAtiveAction} = whichSpaceIsActiveSlice.actions;

// Export the reducer of the slice

export default whichSpaceIsActiveSlice.reducer;