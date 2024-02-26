
export const ContactezNous = ()=> {

    return (
        <div className="w-full flex flex-col justify-center items-center bg-third ">
            <h2 className="p-10 text-3xl font-semibold"> Contact </h2>
            <form id="contactForm">
                <div className="w-full flex flex-rows-3">
                    <div className="w-1/3">
                        <div className="flex flex-col">
                        <label htmlFor="nomComplet" className="w-44 m-5 text-xl font-semibold">
                            Nom complet
                        </label>
                        <label htmlFor="mail" className="w-44 m-7 text-xl font-semibold">
                            mail
                        </label>
                        <label htmlFor="phone" className="w-44 m-7 text-xl font-semibold">
                             N° de Téléphone
                        </label>
                        <label htmlFor="sujet" className="w-44 m-7 text-xl font-semibold">
                            sujet
                        </label>
                        </div>
                    
                    </div>
                    <div className="w-2/3">
                        <div className="flex flex-col">
                                <input type="text" id="nomComplet" className=" w-44 px-44 py-2 m-4 rounded-md" />
                                <input type="text" id="mail"  className="w-44 px-44 py-2 m-5 rounded-md"/>
                                <input type="text" id="phone"  className="w-44 px-44 py-2 m-5 rounded-md"/>
                                <input type="text" id="sujet"  className="w-44 px-44 py-10 m-5 rounded-md"/>
                        </div>
                    
               </div>
              
                   
                </div>
                
               
              
            </form>
            <button className="bg-darkk hover:bg-secondary text-white font-bold text-lg py-2 px-14 rounded h-12 m-2">
                Envoyé
            </button>

            <div className="w-full m-5 bg-secondary flex flex-col-3 space-x-12">
                <div className="w-1/3 p-6">
                Envoyé
                </div>
                <div className="w-1/3">Envoyé</div>
                <div className="w-1/3">Envoyé</div>
            </div>

        </div>
    )
}