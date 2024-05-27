import { createAccountPopupProps } from "../../../Types/Globals";


export const CreateAccountForm : React.FC<createAccountPopupProps> = ({isOpen , isClose})=> {
    if (!isOpen){
        return null;
    }
   
    return (
       <div className="w-full flex z-30 flex-col items-center justify-center fixed inset-0 bg-gray-500 bg-opacity-75">
        <form  className="bg-third flex flex-col justify-center items-center rounded-md">
            <div className="w-full flex flex-row">
                        <div className="w-1/2">
                            <div className="w-full flex items-start p-3">
                               <h3>ddd</h3>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="w-full flex justify-end items-start">
                                <span className="close px-3 cursor-pointer hover:text-neutral-700" onClick={isClose}>&times;</span>
                            </div>
                        </div>
                        
            </div>
            
            <div className="flex flex-row gap-2">
                <div className="w-3/4 px-2">
                    <ul className="opacity-50 ">
                        <li>
                            <div>
                               <h4>dsadsa</h4> 
                            </div>
                            
                        </li>
                        <li>
                            <div>
                               <h4>sadsad</h4>
                            </div>
                            
                        </li>
                        <li>
                        <div>
                               <h4>sadsad</h4>
                            </div>
                            
                        </li>
                    </ul>
                </div>
                <div className="w-1/4 p-0 mr-0 flex justify-center items-center ">
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