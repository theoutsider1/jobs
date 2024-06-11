
//import { useSelector } from "react-redux";
import { activeStateProps } from "../../../Types/Globals";
//import { RootState } from "../../store/store";

export const RecruterSpace: React.FC<activeStateProps>= ({onActive, roleFromAuth})=> { 
    //const {recruteurSpace}= useSelector((state : RootState ) => state.space)
    
    return (
        <div>
            <button onClick={onActive}  className={`w-44 h-14 ${roleFromAuth == 'recruiter' ? ' bg-darkk font-semibold' : 'bg-third'}`}>
                Espace Recruteur
            </button>
        </div>
    )
}