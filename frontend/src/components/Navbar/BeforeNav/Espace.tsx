import { CandidatSpace } from "./EspaceCandidat";
import { RecruterSpace } from "./RecruteurEspace";






const Espace = ()=> {

   

    return (
        <>
            <div className="w-full h-14 bg-third flex">
                <CandidatSpace/>
                <RecruterSpace/>
            </div>
        </>
    )
}

export default Espace;