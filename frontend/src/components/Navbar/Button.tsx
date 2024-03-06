//import React from 'react';

import { useNavigate } from "react-router-dom";

const Button = () => {
    const navigate = useNavigate()
    const handleClick = ()=> {
        navigate('/chooseSpace')
    }
    return (
        <button 
        onClick={handleClick}
        className='bg-teal-300 text-black py-2 px-6 rounded-lg '>
            Ameliorer Mon CV
        </button>
    )
}

export default Button;