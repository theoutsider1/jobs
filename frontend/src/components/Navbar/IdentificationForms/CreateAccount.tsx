import { useCallback, useEffect, useRef, useState } from "react"



export const CreateAccountCandidates = ()=> {
  const [toggleRole, setToggleRole] = useState(false);
  const roleRef = useRef<HTMLDivElement>(null);
  const [selectedRole, setSelectedRole] = useState("vous etes");

  const toggleDropdown = () => {
    setToggleRole(prev => !prev);
};
   const handlerRefDropdown = useCallback((e: MouseEvent)=>{
    if (roleRef.current && !roleRef.current.contains(e.target as Node)) {
      setToggleRole(false);
    }
   },[])
   useEffect(() => {
    document.addEventListener("mousedown", handlerRefDropdown);
    return () => {
        document.removeEventListener("mousedown", handlerRefDropdown);
    };
}, [handlerRefDropdown]);
    return (
       
             <div className="p-10 bg-third flex flex-col gap-5 justify-center items-center">
           
           <form
           // onSubmit={handleLoginSubmit} 
           className='bg-neutral-100 w-auto m-12 p-10'
            >
                <h3 className="text-4xl font-bold py-2">S’inscrire</h3>
              <div className="p-3">
                  <label htmlFor="fullName" className="hidden mb-2 text-sm font-medium text-gray-900">Your email</label>
                  <input type="text"
                   // value={recruiterData.email}  onChange={handleInputChanges}
                    name="fullName" id="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Nom Complet" />
              </div>

              <div className="p-3">
                  <label htmlFor="phone_number" className="hidden mb-2 text-sm font-medium text-gray-900">Your email</label>
                  <input type="tel"
                   // value={recruiterData.email}  onChange={handleInputChanges}
                    name="phone_number" id="phone_number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Telephone" />
              </div>

              <div className="p-3">
                  <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900">Your email</label>
                  <input type="email"
                   // value={recruiterData.email}  onChange={handleInputChanges}
                    name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" />
              </div>
              <div className="p-3 relative">
                    <label htmlFor="password" className="hidden  mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input type="password"
                   // value={recruiterData.password} onChange={handleInputChanges} 
                     name="password" id="password" placeholder="••••••••" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "/>
   
                    {/* <div className='absolute'>
                       <span className={credentials ? 'text-sm text-red-800 px-2 py-1' : 'hidden'} >Incorrect Credentials</span>
   
                     </div> */}
                </div>
              <div className="p-3 relative">
                    <label htmlFor="password" className="hidden  mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input type="password"
                   // value={recruiterData.password} onChange={handleInputChanges} 
                     name="password" id="password" placeholder="••••••••" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "/>
   
                    {/* <div className='absolute'>
                       <span className={credentials ? 'text-sm text-red-800 px-2 py-1' : 'hidden'} >Incorrect Credentials</span>
   
                     </div> */}
                </div>
               {/*  */}
              
              {/*  */}
                <div className="flex items-center justify-between p-5">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="remember" className="text-gray-500 ">Remember me</label>
                        </div>
                    </div>
                    <a href="#" className="px-1.5 text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
                </div>
                <button type="submit" className="w-full text-gray bg-fourth hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm  py-3 text-center ">Sign in</button>
                <p className="text-sm font-light pt-2 text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <a href="#" className="font-medium text-gray-500 hover:underline ">Sign up</a>
                </p>

                
          </form>
        </div>
    )
}