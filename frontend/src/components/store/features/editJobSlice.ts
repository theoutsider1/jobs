import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { EditedJob } from "../../../Types/Globals";


interface EditJobState {
    editJob: EditedJob,
}

const initialState: EditJobState ={
    editJob: {
        id: 0,
        createdAt: "",
        updatedAt: "",
        title: "",
        companyName: "",
        contractType: "",
        city: "",
        domaine: "",
        jobType: "",
        deadline: "",
        fonction:"",
        studiesRequirement:"",
        experience: "",
        description: "",
        missions: "",
        profil: "",
        advantages: [],
    },
}

export const editedJobSlice = createSlice({

    // The name of the slice
    name: "editJob",

    // The initial state of the slice
    initialState,
    
    // The reducers of the slice
    reducers: {
        editJob : (state, action:PayloadAction<{editJob : EditedJob}>)=> {

            state.editJob = { ...action.payload.editJob };

        }
    }
})

export const { editJob } = editedJobSlice.actions;

export default editedJobSlice.reducer;