




export const HistoricalSideBarComponent = ()=> {


    return (
        
        <div className="flex flex-col items-center ">

            <div className="w-full flex flex-col items-center">
                <div className="p-10">
                    <h3 className="text-3xl font-medium opacity-65">Historique</h3>
                </div>
            </div>
            <div className="flex w-full justify-start items-start">
                    <div className="w-full">
                        <ul className="p-3">
                            <li className="pb-5">
                                <div className="flex flex-col w-full px-2">
                                    <span className="pb-2">01/01/2023</span>
                                    <span className="font-semibold">Responsaple logistique</span>
                                    <span className="opacity-60">30 CV reçu</span>
                                </div>
                                
                            </li>
                            <li className="pb-5">
                            <div className="flex flex-col w-full px-2">
                                    <span className="pb-2">01/01/2023</span>
                                    <span className="font-semibold">Responsaple logistique</span>
                                    <span className="opacity-60">30 CV reçu</span>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            
        </div>
        
    )
}