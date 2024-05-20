import GetStartedButton from './GetStartedButton';
import LatestOffer from '../LatestOffers/Latestoffers';
import TestiCarousel from '../Carousel/TestiCarousel';
import LastProfiles from '../Last Profiles/LastProfiles';
import WhyUs from '../WhyUs/WhyUs';


const HeroSection: React.FC =( )=>{
 
    return(
        <>
        
        <div className="w-full h-screen drop-shadow-lg pt-10 bg-[url('../../src/assets/hero-section1.png')] bg-cover bg-no-repeat flex justify-center items-center flex-col gap-14 ">
            <div className="">
                <h1 className="text-white text-5xl font-extrabold tracking-widest ">2 Etapes pour trouver un emploi</h1>
                
            </div>
                
                     {/*---------Button----------- */}
                    <div >
                            <GetStartedButton />
                    </div>

                    
               {/* </div>*/}               
           
        </div>
        <div>
            <LatestOffer/>
        </div>

        <div>
            
            <TestiCarousel/>
        </div>
        <div>
            <LastProfiles/>
        </div>
        <div>
            <WhyUs/>
        </div>
        
        </>
    ) 
}

export default HeroSection;

