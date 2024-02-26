import { useState } from "react";

export const CandidatSpace= ()=> { 

    const [candidatIsActive, setCandidatIsActive] = useState(Boolean);


    return (
        <div>
            <button className="w-44 h-14 bg-darkk font-semibold">
                Espace Candidat
            </button>
        </div>
    )
}