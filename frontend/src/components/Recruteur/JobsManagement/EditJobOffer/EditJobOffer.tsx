import { useEffect } from "react";
import { useAppSelector } from "../../../store/store"

export const EditJobOffer = () => {
    const toEditJob = useAppSelector(state => {
       
        
         console.log("tata",state.recruiterOffersList.recruiterOffer);
    })

    useEffect(()=>{},[toEditJob])
    return (
        <div className="w-full h-screen">
            
            <p>test</p>
        </div>
    )
}