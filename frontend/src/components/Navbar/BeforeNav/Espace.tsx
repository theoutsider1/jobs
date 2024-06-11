import { CandidatSpace } from "./EspaceCandidat";
import { RecruterSpace } from "./RecruteurEspace";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../store/store";
import { candidatIsAtiveAction, recruteurIsAtiveAction } from "../../store/features/espaceSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";




const Espace:React.FC = ()=> {
    
    const role = useSelector((state: RootState) => state.auth.role)
    const navigate = useNavigate();

    {/** redux toolkit */}
    const dispatch =useAppDispatch();

    const handleRecruteurSpaceClick = ()=> {
        dispatch(recruteurIsAtiveAction())
        navigate('/EspaceRecruteur');
        console.log(role);
   
    }
    const handleCandidatSpaceClick = ()=> {
        dispatch(candidatIsAtiveAction())
        alert('vous etes conneté autant que recruteur')
        navigate('/');
        
    
    }
    const roleFromAuth = localStorage.getItem('role')
    //useSelector((state: RootState) => state.auth.role)
    const [space, setSpace]= useState<string | null> (null);

    useEffect(()=>{

      if (roleFromAuth !== null && roleFromAuth == 'recruiter' ) {
        setSpace(roleFromAuth)
  
      }
      
    },[roleFromAuth])

    return (
        <>
            <div className="w-full h-14 bg-third flex">
                <CandidatSpace onActive={handleCandidatSpaceClick} roleFromAuth ={space} />
                <RecruterSpace onActive={handleRecruteurSpaceClick} roleFromAuth ={space}/>
            </div>
        </>
    )
}

export default Espace;