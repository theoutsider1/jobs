


export const LatestProfiles = ()=> {




    return (
        <div className="w-full drop-shadow-lg bg-primary">

            <div className="w-full flex justify-center items-center ">
                     <div className=" p-10 px-24">
                        <h2 className="text-black text-4xl font-bold tracking-wider">
                            Dernières profils:
                        </h2>
                     </div>
                     
             </div>
            
            <div className='w-full grid grid-cols-3 grid-rows-2 gap-2 px-14 justify-items-center items-center'>
            <div className="max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow col-start-1 row-start-2 ">
                <div className=' flex justify-start p-4'>
                    <svg className="w-10 h-10 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    
                    </svg> 
                    <h4>N 1266353</h4>
                </div>
                
                <ul className='p-5'>
                    <li>Année d’expériences: <span>5 ans</span></li>
                    <li>Secteur: <span>Logistique</span></li>
                    <li>Formation: <span>Bac+5</span></li>
                    <li>Langues: <span>Anglais.Espagnol...</span></li>
                    <li>Compétences: <span>Gestion d’équipe..</span></li>
                </ul>
             </div>

             <div className="max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow col-start-2 row-start-1">
                <div className=' flex  justify-start p-4'>
                    <svg className="w-10 h-10 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    
                    </svg> 
                    <h4>N 000000</h4>
                </div>
                
               <ul className='p-5'>
                <li>Année d’expériences: <span>5 ans</span></li>
                <li>Secteur: <span>Logistique</span></li>
                <li>Formation: <span>Bac+5</span></li>
                <li>Langues: <span>Anglais.Espagnol...</span></li>
                <li>Compétences: <span>Gestion d’équipe..</span></li>
               </ul>
             </div>

             <div className="max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow col-start-3 row-start-2">
                <div className=' flex justify-start p-4'>
                    <svg className="w-10 h-10 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    
                    </svg> 
                    <h4>N 1266353</h4>
                </div>
                
               <ul className='p-5'>
                <li>Année d’expériences: <span>5 ans</span></li>
                <li>Secteur: <span>Logistique</span></li>
                <li>Formation: <span>Bac+5</span></li>
                <li>Langues: <span>Anglais.Espagnol...</span></li>
                <li>Compétences: <span>Gestion d’équipe..</span></li>
               </ul>
             </div>
            </div>
             
                
            <div className="w-full p-10 flex justify-center items-center ">
                <button type="button" className=" text-gray-900 bg-third hover:bg-gray-200  font-semibold rounded-lg text-m px-12 py-4 text-center inline-flex items-center ">
                    Voir Plus
                </button>
                </div>



            </div>      
    )
}