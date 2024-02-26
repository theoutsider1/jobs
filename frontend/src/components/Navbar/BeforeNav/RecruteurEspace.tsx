import { useState } from "react";

export const RecruterSpace= ()=> { 
    const [RecruteurIsActive, setRecruteurIsActive]= useState(Boolean);


    return (
        <div>
            <button className="w-44 h-14 bg-darkk font-semibold">
                Espace Recruteur
            </button>
        </div>
    )
}