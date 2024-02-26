export const HeroSectionRecruteur = ()=>{

    return (
       <>
        <div className="w-full h-screen drop-shadow-lg pt-10 bg-[url('../../src/assets/recrutePhoto.png')] bg-cover bg-no-repeat  flexc justify-center items-center relative ">
        <div className="w-full flex flex-col justify-start items-end ">
            <h1 className="text-white text-5xl font-extrabold tracking-widest m-24  ">
            2JOBS LA PLATEFORME  <br />
            de recrutement Dédiée<br />
            aux START-up et pme
            </h1>
            
        </div>       
       
    </div>
    <div className="w-full flex justify-center items-center absolute -bottom-20  ">
        <div className="w-96 p-8 bg-third rounded-lg">
            <h3 className="text-2xl font-semibold">Connectez-vous:</h3>
            <form action="" className="">
                <div className="p-3">
                    <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" />
                </div>
                <div className="p-3">
                      <label htmlFor="password" className="hidden mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "/>
                  </div>

                  <div className="flex items-center justify-between p-4">
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
                
    
</>
     
        
        
    )
}