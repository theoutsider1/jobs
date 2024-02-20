import { IonIcon } from '@ionic/react';
import {locationOutline} from 'ionicons/icons';
import HeroSection from "../../assets/hero-section.png";

const JobTitleBar = ()=> {

    return (
        <>
            <div className="w-full bg-fourth">
                <div className=" grid grid-cols-4 gap-14 p-10 px-24 justify-around items-center">
                    <div className=" col-span-3 flex justify-end ">
                        <h3 className='text-5xl font-semibold'>Responsable administratif et financier h/f</h3>
                    </div>
                    <div className="w-full flex-cols-2 justify-center ">
                        <img className='max-w-40'
                        // src="https://github.com/horizon-ui/horizon-tailwind-react-ts-corporate/blob/main/src/assets/img/profile/image1.png?raw=true"
                            src ={HeroSection}
                        alt="" />
                        <h4 className='pt-2 text-thin'>Mc Donald's</h4>
                    </div>
                </div>

                <div className='w-full flex justify-between px-10'>
                   <div>
                   Publié le  01/12/2023
                   </div> 
                   <div>
                   <IonIcon icon={locationOutline} className='text-base'></IonIcon>
                   Rabat
                   </div>
                </div>
                
            </div>
        </>
    )
}

export default JobTitleBar;