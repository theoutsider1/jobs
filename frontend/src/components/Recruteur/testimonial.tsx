import bigbullet from '../../assets/big-bullets.svg'
import shape from '../../assets/shape.svg'






export const Testimonials = ()=> {




    return (
        <div className={`w-full bg-third`}>
            <div className="flex flex-row justify-between ">
                <div className='flex'>
                     <div className='w-1/2'>
                    
                     <img src={bigbullet} alt="bullets-shape" />
                     </div>
                </div>
                <div className='flex justify-end'>
                    <div className="w-1/2">
                        <img src={bigbullet} alt="bullets-shape" className='transform -scale-x-100'/>

                    </div>
                    
                </div>
            </div>
            <div className={`flex justify-center items-center bg-${shape}`}>
                <h2 className='text-4xl font-semibold pt-24 pb-8'>
                     Témoignage de <span className='underline decoration-fourth'>nos recruteurs</span>
                </h2>
            </div>
           
        </div>
    )
}