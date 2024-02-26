import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OfferData } from "../../../Types/Globals";
import { jobDetails } from "../../../Types/DataJobs";

interface jobState {
    job: OfferData[],
}

const initialState: jobState ={
        job: [],
}

export const jobSlice = createSlice({
    name: "clickedJob",
    initialState,
    reducers: {
        getJob : (state, action:PayloadAction<{id:number}>)=> {
            const { id } = action.payload;
            const jobFinded = jobDetails.find( el => el.id == id)

            if (jobFinded) {
                const newJob: OfferData = {
                    id:id, // IDs start from 1
                    jobTitle: jobFinded.jobTitle, 
                    companyName: jobFinded.companyName, 
                    contract: jobFinded.contract, 
                    ville: jobFinded.ville, 
                    domaine: jobFinded.domaine, 
                    studies: jobFinded.studies, 
                    experienceYears: jobFinded.experienceYears, 
                    description: jobFinded.description, 
                    missions: jobFinded.missions, 
                    profil: jobFinded.profil, 
                    avantages: jobFinded.avantages, 
                };
                state.job =[];
                state.job.push(newJob);
            }
          
        }
    }
})

export const { getJob } = jobSlice.actions;

export default jobSlice.reducer;