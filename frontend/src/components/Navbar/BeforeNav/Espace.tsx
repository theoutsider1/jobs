import { CandidatSpace } from "./EspaceCandidat";
import { RecruterSpace } from "./RecruteurEspace";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { candidatIsAtiveAction, recruteurIsAtiveAction } from "../../store/features/espaceSlice";



const Espace:React.FC = ()=> {
  
    const navigate = useNavigate();

    {/** redux toolkit */}
    const dispatch =useAppDispatch();

    const handleRecruteurSpaceClick = ()=> {
        dispatch(recruteurIsAtiveAction())
        navigate('/EspaceRecruteur');
        
       
    }
    const handleCandidatSpaceClick = ()=> {
        dispatch(candidatIsAtiveAction())
        navigate('/');
        
    
    }
   

    return (
        <>
            <div className="w-full h-14 bg-third flex">
                <CandidatSpace onActive={handleCandidatSpaceClick}/>
                <RecruterSpace onActive={handleRecruteurSpaceClick}/>
            </div>
        </>
    )
}

export default Espace;