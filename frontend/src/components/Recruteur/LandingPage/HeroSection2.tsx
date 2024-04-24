//import LastProfiles from '../../Last Profiles/LastProfiles';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Testimonials } from '../Testimonial';
import { LatestProfiles } from './LastestProfs';
import { StatisRec } from './RecStatistics';
import { TestimonialsCards } from './TestiCards';
import axios from 'axios';





export const HeroSectionRecruteur = ()=>{
    const [credentials, setcredentials] = useState(false);

    // Incoming data from the server 
    const [recruiterData, setRecuiterData] = useState({
        email : "",
        password : ""
    })

    
    const handleInputChanges = (e : ChangeEvent<HTMLInputElement>)=> {
        e.preventDefault();
        
        // get the name + value attributes
        const {name, value} = e.target;
        setRecuiterData({
            ...recruiterData, 
            [name]: value
        })
    }

    const handleLoginSubmit = async(e: FormEvent)=> {
        e.preventDefault();
        const userData = {
            email : recruiterData.email,
            password : recruiterData.password, 
        };

        try {
            const response = await axios.post("http://localhost:3000/espacerecruteurs/login", userData)
               
                console.log(response.status, response.data.access_token);
            
        } catch (error : any) { 
            // if Unauthorized  or forbidden  
            if (error.response.data.statusCode ==  "401" || error.response.data.statusCode ==  "403" ) {
                console.log("hello" )
                
                setcredentials(true);
                
            }         
           
        }
        
        
    }
    return (
       <>
        <div className="w-full h-screen pt-10 pb-0 bg-[url('../../src/assets/recrutePhoto.png')] bg-cover bg-no-repeat flex justify-center items-center relative ">
        <div className="w-full flex flex-col justify-start items-end ">
            <h2 className="text-white text-5xl font-extrabold tracking-widest m-24  ">
            <span className='underline decoration-darkk'>2JOBS</span> LA PLATEFORME  <br />
            de recrutement Dédiée<br />
            aux START-up et pme
            </h2>
            
        </div>       
       
    </div>
    <div className="w-full flex justify-center items-center absolute -bottom-36  ">
        <div className="w-96 p-8 bg-white rounded-lg ">
            <h3 className="text-2xl font-semibold">Connectez-vous:</h3>

            <form
             onSubmit={handleLoginSubmit} >
                <div className="p-3">
                    <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" value={recruiterData.email}  onChange={handleInputChanges} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" />
                </div>
                <div className="p-4 relative">
                      <label htmlFor="password" className="hidden  mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input type="password" value={recruiterData.password} onChange={handleInputChanges} name="password" id="password" placeholder="••••••••" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "/>

                      <div className='absolute'>
                        <span className={credentials ? 'text-sm text-red-800 px-2 py-1' : 'hidden'} >Incorrect Credentials</span>

                        </div>
                  </div>
                 

                  <div className="flex items-center justify-between p-5">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 ">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-gray bg-fourth m-3 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center ">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" className="font-medium text-gray-500 hover:underline ">Sign up</a>
                  </p>
            </form>
        </div>

        </div>
        <Testimonials/>
        <TestimonialsCards/>
        <StatisRec/>
        <LatestProfiles/>
    
</>
     
        
        
    )
}