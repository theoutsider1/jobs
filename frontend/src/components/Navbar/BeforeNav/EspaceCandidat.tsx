import { activeStateProps } from "../../../Types/Globals";

export const CandidatSpace: React.FC<activeStateProps>= ({active,onActive})=> { 

    

    return (
        <div>
            <button onClick={onActive} disabled={active} className={`w-44 h-14 ${active ? ' bg-darkk font-semibold' : 'bg-third'}`}>
                Espace Candidat
            </button>
        </div>
    )
}