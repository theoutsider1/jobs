
import { AddOfferFormComponent } from "./AddOfferFrom/AddOfferComponent"
import { RootState } from "../../store/store"
import { useSelector } from "react-redux"



export const AddJobComponent = ()=> {

    // const logged = useSelector((state : RootState)=> state.auth.isLoggedIn)
     const role = useSelector((state : RootState)=> state.auth.role)
     const isLoggedIn = useSelector((state : RootState)=> state.auth.isLoggedIn)
    console.log(role);
    console.log(isLoggedIn);

    
    return (
        <div className="w-full">

                <AddOfferFormComponent/>
                
                
        </div>
    )
}