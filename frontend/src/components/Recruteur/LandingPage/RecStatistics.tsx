





export const StatisRec= ()=> {




    return (
        <div className="p-10 bg-fourth 
                rounded 
                shadow-shadow"
                id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl className="grid items-center max-w-screen-xl grid-cols-2 gap-36 p-2 mx-auto sm:grid-cols-3 xl:grid-cols-4 text-white sm:p-8">
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-black text-3xl font-extrabold">+2800</dt>
                    <dd className="text-white">Offres d'emplois</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-black text-3xl font-extrabold">+80000</dt>
                    <dd className="text-white">CVS traités</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-black text-3xl font-extrabold">+158000</dt>
                    <dd className="text-white">Recruteurs actifs</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-black text-3xl font-extrabold">+700</dt>
                    <dd className="text-white">Collaborateur</dd>
                </div>
            
            </dl>
        </div>
    )
}