import { createAccountPopupProps } from "../../../Types/Globals";


export const CreateAccountForm : React.FC<createAccountPopupProps> = ({isOpen , isClose})=> {
    if (!isOpen){
        return null;
    } 
   
    return (
       <div className="w-full p-5 flex z-30 flex-col items-center justify-center fixed inset-0 bg-gray-500 bg-opacity-75">
        <form  className="w-1/3 bg-third flex flex-col justify-center items-center rounded-md">
            
                        <div className="w-full">
                                <div className="w-full flex justify-end items-start py-3">
                                    <span className="close px-3 cursor-pointer hover:text-neutral-700" onClick={isClose}>&times;</span>
                                </div>
                                <div className="w-full flex-col items-start p-3">
                                    <h3 className=" py-2 text-darkk text-center text-3xl font-bold">Créer un compte</h3>
                                        {/* label 1 */}
                                    <div className="p-3">
                                        <label htmlFor="fullName" className="hidden mb-2 text-sm font-medium text-gray-900">Nom Complet</label>
                                        <input type="text"  
                                                name="fullName" id="fullName" 
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                                                placeholder="Nom Complet" />
                                    </div>
                                        {/* label 2 */}
                                    <div className="p-3">
                                        <label htmlFor="mail" className="hidden mb-2 text-sm font-medium text-gray-900">E-mail</label>
                                        <input type="email"  
                                                name="mail" id="mail" 
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                                                placeholder="E-mail" />
                                    </div>
                                        {/* label 3 */}
                                    <div className="p-3">
                                        <label htmlFor="phone_number" className="hidden mb-2 text-sm font-medium text-gray-900">Numero de télephone</label>
                                        <input type="text"  
                                                name="phone_number" 
                                                id="phone_number" 
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                                                placeholder="Numéro de télephone" />
                                    </div>
                                        {/* label 4 */}
                                    <div className="p-3">
                                        <label htmlFor="password" className="hidden mb-2 text-sm font-medium text-gray-900">Mot de Passe</label>
                                        <input type="password"  
                                                name="password" 
                                                id="password" 
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                                                placeholder="Mot de Passe" />
                                    </div>
                                        {/* label 5 */}
                                    {/* <div className="p-3">
                                        <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900">Your email</label>
                                        <input type="email"  name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Xyz@xxx.com" />
                                    </div> */}
                                        
                                </div>
                        </div>
            
            <div className="flex flex-col p-4">
                <div className=" flex justify-center items-center ">
                    <button
                        type="submit"                    
                        className="ustify-self-center rounded bg-darkk px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.2),0_8px_9px_-4px_rgba(0,0,0,0.3)] " >
                        Postuler
                    </button>
                </div>
            </div>
        </form>
            
            
        </div>
    )
}