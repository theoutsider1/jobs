import { useSelector } from "react-redux";
import { activeStateProps } from "../../../Types/Globals";
import { RootState } from "../../store/store";

export const CandidatSpace: React.FC<activeStateProps>= ({onActive})=> { 
    
    const { candidatSpace } = useSelector((state: RootState) => state.space);

    return (
        <div>
            <button onClick={onActive} className={`w-44 h-14 ${candidatSpace ? ' bg-darkk font-semibold' : 'bg-third'}`}>
                Espace Candidat
            </button>
        </div>
    )
}