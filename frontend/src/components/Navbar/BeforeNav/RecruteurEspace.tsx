
import { useSelector } from "react-redux";
import { activeStateProps } from "../../../Types/Globals";
import { RootState } from "../../store/store";

export const RecruterSpace: React.FC<activeStateProps>= ({onActive})=> { 
    const {recruteurSpace}= useSelector((state : RootState ) => state.space)
    
    return (
        <div>
            <button onClick={onActive}  className={`w-44 h-14 ${recruteurSpace ? ' bg-darkk font-semibold' : 'bg-third'}`}>
                Espace Recruteur
            </button>
        </div>
    )
}