const OffersCard = () => {


    return (
        <div className="flex flex-row w-full justify-start p-14 gap-24">


            <div className="bg-white flex-none w-96">
                <div className="bg-third w-full">
                    fhdfh
                </div>
            </div>
            <div className="bg-blue-500 flex-auto ">
                <div className=" bg-slate-700 w-auto">
                     <div className="w-full">
                        <div className="flex w-full items-center bg-primary p-3 rounded">
                            <div className="">
                                <img className="h-[124px] w-[124px] rounded-lg"
                                src="https://github.com/horizon-ui/horizon-tailwind-react-ts-corporate/blob/main/src/assets/img/profile/image1.png?raw=true"
                                alt=""/>
                            </div>

                            <div className="w-full ml-14">

                                <h2>Responsable administratif et financier h/f  </h2>
                                <div className="flex">
                                    <div>
                                        <p className="tex-base mt-2 font-light text-neutral-100 inline">
                                                Company name 
                                            </p>
                                            <span className="px-5">|</span>
                                            <p className="mt-2 text-base text-gray-600 inline px-4">
                                                    Ville | Contract
                                            </p>
                                    </div>
                                </div>
                                <div className="flex py-6">
                                    <p>
                                         Niveau d’études: Bac +5 en Finance
                                    </p>
                                    <span className="px-5">|</span>
                                    <p>
                                        Expérience: 2ans
                                    </p>
                                </div>
                            
                                <div className="flex justify-end">
                                    <p className="text-sm">publish date</p>
                                </div>

                            </div>
                        </div>
                     </div>
                </div>
            </div>


        </div>
    )
}


export default OffersCard;