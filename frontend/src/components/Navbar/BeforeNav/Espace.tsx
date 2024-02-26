import { useState } from "react";
import { CandidatSpace } from "./EspaceCandidat";
import { RecruterSpace } from "./RecruteurEspace";
import { useNavigate } from "react-router-dom";





const Espace:React.FC = ()=> {
    const [recruteurIsActive, setRecruteurIsActive]= useState(false);
    const [candidatIsActive, setCandidatIsActive] = useState(true);

    const navigate = useNavigate();

    const activeCandidat = ()=> {
        setCandidatIsActive(true);
        setRecruteurIsActive(false);
        navigate('/')


    }
    const activeRecruteur =()=>{
        setRecruteurIsActive(true);
        setCandidatIsActive(false);
        navigate('/EspaceRecruteur')
    }

    return (
        <>
            <div className="w-full h-14 bg-third flex">
                <CandidatSpace active={candidatIsActive} onActive={activeCandidat}/>
                <RecruterSpace active={recruteurIsActive} onActive={activeRecruteur}/>
            </div>
        </>
    )
}

export default Espace;