import herosection from '../../assets/hero-section.png'



const Advice = ()=> {


    return (
        <div className="bg-bright rounded-xl">
            <div className="w-full flex justify-center p-3">
                 <h2 className="text-darkk text-3xl font-bold tracking-wider">Quelques conseils</h2>
            </div>
            <div className="flex flex-row gap-5 p-7">
                <div className="w-1/3 flex flex-col">
                    <div className='bg-white pb-3'><img src={herosection} alt="" /> <a href="#" className='px-6'>Préparer l’entretien orale</a></div>
                    
                </div>
                <div className="w-1/3 flex flex-col">
                    <div className='bg-white pb-3'><img src={herosection} alt="" /> <a href="#" className='px-6'>Préparer la lettre de motivation</a></div>
                    
                </div>
                <div className="w-1/3 flex flex-col">
                    <div className='bg-white pb-3'><img src={herosection} alt="" /> <a href="#" className='px-6'>Découvrir les droits du travail</a></div>
                    
                </div>
               
            </div>
        </div>
       
    )
}
export default Advice;