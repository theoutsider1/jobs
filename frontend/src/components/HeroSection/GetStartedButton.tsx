// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const GetStartedButton = ()=> {
    const navigate = useNavigate();

    const navigateToJobOffers= () => {
        navigate('/espacerecruteur')
    }
    return (
        <>
        
        <button onClick={navigateToJobOffers} className="bg-primary hover:bg-secondary text-white font-bold text-lg py-2 px-4 rounded h-12">
            C'est parti 
        </button>
        
        </>
    )
}

export default GetStartedButton ;