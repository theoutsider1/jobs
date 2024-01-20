import { useState } from 'react';
import {IonIcon} from '@ionic/react';
import {chevronForward} from 'ionicons/icons';

type a = {
    isActive: boolean;
    onClick?: ()=> void;
    onItemClick?: (item:Country)=> void;
}

interface Country{
    id: number;
    countryName: string;
}

const countryData:Country[] = [
    {
        id: 1 , countryName: 'Maroc',
    },
    {
        id: 2 , countryName: 'France',
    },
    {
        id: 3 , countryName: 'Allemagne',
    },
    {
        id: 4 , countryName: 'Canada',
    },
    {
        id: 5 , countryName: 'Espagne',
    },
]

const CountryDropDown: React.FC<a> = ({isActive, onClick, onItemClick})=> {
    //const [countryList, setCountryList] = useState(false);
    const [country, setCountry] = useState('Select Country');

    // const handleCountryClick = ()=> {
    //     setCountryList(!countryList);
    // }
    
    return (
        <>
            <div className='flex w-full justify-between  cursor-pointer' onClick={onClick} >
                        
                    <span className='p-2 text-black'>{country}</span>
                    <IonIcon icon= {chevronForward} className= {`py-3 text-black transition-transform transform ${isActive ? 'rotate-90' : 'rotate-0'}`}></IonIcon>  
            </div>

            <div className={`${!isActive ? 'hidden' : 'h-56 overflow-y-auto rounded' }`}>
              { isActive &&

                  countryData.map((countryElem:Country)=>(

                      <ul className='bg-secondary p-2 text-black '>

                          <li className='w-full p-2 border-b-2 border-neutral-950/[.10] hover:bg-primary cursor-pointer' 
                              key={countryElem.id} 
                              onClick={()=> {
                                // Hide List after the Click
                                
                                onItemClick ? onItemClick(countryElem): null;
                                setCountry(countryElem.countryName) }}>
                              {countryElem.countryName}</li>
                          
                      </ul>
                  ))
              }
          </div>
        </> 
    )
}

export default CountryDropDown;


