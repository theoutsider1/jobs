import { ChangeEvent, useRef, useState } from "react"

export const OffersManagement = () =>{

    // const ref: React.MutableRefObject<HTMLInputElement | null>  = useRef(null);
    // const [value , setValue] = useState('');


    return (
        <div className="w-full flex flex-col">
            <div className="w-full flex justify-center items-center p-10 ">
                <h3 className="text-5xl font-semibold ">
                    Suivez vos <span className="underline decoration-dashed decoration-darkk">offre d'emploi</span>
                </h3>
            </div>

            <div className="px-28">
                <div className=" flex gap-12 justify-start border-b-2 py-0.5">
                    <h4 className="px-3 cursor-pointer">Tous les offres de travail jhg</h4>
                    <h4 className="px-3 cursor-pointer">Offres de travail en cours jhg</h4>
                    <h4 className="px-3 cursor-pointer underline underline-offset-8">Offres de travail clôturées jhg</h4>
                </div>
                {/* Seach Form (Input)*/}
                <div className="w-full flex justify-end m-2">
                {/* <input type="text" ref={ref} value={value} className="px-14" /> */}
                {/* <input
                        type="text"
                        id="searchJob"
                        className="  w-1/2 rounded-md border-0 py-2 m-2 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                     */}
                     <div className="w-1/3">
                        <form className="py-4">   
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div> 
                                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-third focus:border-third" placeholder="Recherche" required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-secondary  hover:bg-primary focus:ring-4 focus:ring-third focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                            </div>
                        </form>
                    </div>
                    
                </div>

                <div className=" w-full  overflow-hidden rounded-md m-2">
                <table className="table-fixed w-full">
                    <thead className="bg-primary">
                        <tr className="">
                            <th className="p-3" >Publication</th>
                            <th>Date de publication</th>
                            <th>Date de clôture</th>
                            <th>Nombre de vues</th>
                            <th>Nombre de CVs</th>
                        </tr>
                    </thead>
                    <tbody className="bg-fifth">
                        <tr className="text-center ">
                            <td className="p-3"> The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr className="text-center">
                            <td className="p-3">Witchy Woman</td>
                            <td>The Eagles</td>
                            <td>1972</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr className="text-center">
                            <td className="p-3">Shining Star</td>
                            <td>Earth, Wind, and Fire</td>
                            <td>1975</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                    </table>

                </div>


                
            </div>
        </div>
    )
}