import { useState } from 'react';
import {IonIcon} from '@ionic/react';
import {chevronForward} from 'ionicons/icons';

type c = {
    isActive: boolean;
    onClick: ()=> void;
    onItemClick?: (item:Contract)=> void;
}

interface Contract {
    id: number;
    contractName: string;
}

const contractData:Contract[] = [
    {
        id:1, contractName: 'CDI',
    },
    {
        id:2, contractName: 'CDD',
    },
    {
        id:3, contractName: 'Stage',
    },
    {
        id:4, contractName: 'Freelance',
    },
]

const ContractDropDown: React.FC<c> = ({isActive, onClick, onItemClick}) => {
    // const [contract, setContract] = useState(false);
    const [contractType, setContractType] = useState('Select Contract');

   
    // const handleContract = ()=> {
    //     setContract(!contract)
    // }
    
    

    return (
        <>
             <div className='flex w-full justify-between cursor-pointer' onClick={onClick}>
            
                <span className='p-2 text-black'>{contractType}</span>
                <IonIcon icon= {chevronForward} className= {`py-3 text-black transition-transform transform ${isActive ? 'rotate-90' : 'rotate-0'}`} ></IonIcon>  
            </div>
            <div className={`${isActive ? ' h-56 overflow-y-auto rounded z-50' : 'hidden' }`}>
              { isActive &&

                  contractData.map((contractElem: Contract)=>(

                      <ul className='bg-secondary p-2 text-black '>

                          <li className='w-full p-2 border-b-2 border-neutral-950/[.10] hover:bg-primary cursor-pointer' 
                              key={contractElem.id} 
                              onClick={()=> {
                                // Hide List after the Click
                               
                                onItemClick ? onItemClick(contractElem): null;
                                setContractType(contractElem.contractName) }}>
                              {contractElem.contractName}</li>
                          
                      </ul>
                  ))
                }
             </div>
    
          </>   
    )
}

export default ContractDropDown;