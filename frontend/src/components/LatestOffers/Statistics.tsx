const Statistics = () => {

    return (
        
             <div className=" p-4 bg-fourth 
                rounded 
                
                md:p-8" id="stats" role="tabpanel" aria-labelledby="stats-tab">
             <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-4 dark:text-white sm:p-8">
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">+2800</dt>
                    <dd className="text-white-500 ">Offres d'emplois</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">+80000</dt>
                    <dd className="text-white-500">CVS traités</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">+158000</dt>
                    <dd className="text-white-500 ">Recruteurs actifs</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-extrabold">+700</dt>
                    <dd className="text-white-500">Collaborateur</dd>
                </div>
               
            </dl>
        </div>
       
    )
}

export default Statistics;