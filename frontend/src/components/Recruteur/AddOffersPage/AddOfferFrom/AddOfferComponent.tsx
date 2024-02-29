


export const AddOfferFormComponent = ()=> {




    return(

        <div className="w-full flex flex-row-4">
            <div className="w-3/4 ">
                <div className="w-full flex justify-center items-center ">
                    <h3 className="text-5xl font-semibold">Lancer votre offer d'emploi</h3>
                </div>
                <div className="w-full p-6 bg-third flex justify-start items-center">
                    <form action="" /**method="post"*/>
                        <label htmlFor="nomPoste" className="px-24">Nom du Poste</label>
                        <input type="text" className="w-auto " />
                    </form>

                </div>
            </div>
        </div>
        
    )
}