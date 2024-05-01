

import { useAppSelector } from "../../../store/store"

export const EditJobOffer = () => {

   
    const toEditJob  = useAppSelector(state => {
    
        return state.recruiterOffersList.recruiterOffer
    })
   
    return (
        <div className="w-full h-screen">
              {toEditJob && toEditJob.map(field => (
                <div key={field.id}>
                    <h5>{field.title}</h5>
                    <h5>{field.missions}</h5>
                    <h5>{field.studiesRequirement}</h5>
                    <h5>{field.domaine}</h5>
                    <h5>{field.experience}</h5>
                    <h5>{field.description}</h5>
                </div>
            ))}
            <p>test</p>
        </div>
    )
}