import { IonIcon } from '@ionic/react';
import {locationOutline} from 'ionicons/icons';
import HeroSection from "../../assets/hero-section.png";
import { offerEmploi } from '../store/features/dataShapes/dataInterfaces';

const JobTitleBar: React.FC<{jobD : offerEmploi[]}> = ({jobD})=> {

    return (
        <div>
        {
        jobD &&
        jobD.map(e =>(
            <div className="w-full bg-fourth" key={e.title}>
                <div className=" grid grid-cols-4 gap-14 p-10 px-24 justify-around items-center">
                    <div className=" col-span-3 flex justify-end ">
                        <h3 className='text-5xl font-semibold'>{e.title}</h3>
                    </div>
                    
                        <div className="w-full flex-cols-2 justify-center ">
                        <img className='max-w-40'
                            src ={HeroSection}
                            alt="company-img" />
                        <h4 className='pt-2 text-thin'>{e.title}</h4>
                    </div>
                 </div>

                <div className='w-full flex justify-between px-10'>
                   <div>
                   Publié le  {e.createdAt}
                   </div> 
                   <div>
                   <IonIcon icon={locationOutline} className='text-base'></IonIcon>
                   {e.city}
                   </div>
                   
                    
                </div>
                
            </div>
             ) )}
        </div>
    )
}

export default JobTitleBar;