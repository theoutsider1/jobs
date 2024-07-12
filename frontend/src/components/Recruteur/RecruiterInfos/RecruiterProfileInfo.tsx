export const RecruiterProfileInfo = ()=>{

    return(
        <div className="w-full">
            <div className="p-12 font-semibold text-2xl text-center">
                <h3>Mon Profile</h3>
            </div>
            <div className="flex m-8 px-12">
                <div className="w-2/6 flex ">
                     <h3>Photo</h3>
                </div>

                <div className="w-4/6">

                    <div className="py-2">
                        <label htmlFor="fullName" className="w-full text-xl font-semibold">
                            <span>Nom complet</span>
                        </label>
                            <input type="text" id="fullName" className="my-4 block w-full rounded-md border-0 py-1.5 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 " />
                  
                    </div>
                    <div className="py-2">
                        <label htmlFor="mail" className="w-full text-xl font-semibold">
                            <span className="">mail</span>
                        </label>
                            <input type="text" id="mail" className=" my-4 block w-full rounded-md border-0 py-1.5 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 " />
                  
                   </div>
                   <div className="py-2">
                        <label htmlFor="phone_number" className="w-full text-xl font-semibold">
                            <span>Numero de Telephone</span>
                        </label>
                            <input type="text" id="phone_number" className="my-4 block w-full rounded-md border-0 py-1.5 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 " />
                  
                   </div>
                  
                </div>

            </div>
            
        </div>
    )
}