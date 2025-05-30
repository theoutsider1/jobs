import { useState } from "react";

interface DeletePopupProps {
    closePopup: () => void;
}

export const DeletePopup: React.FC<DeletePopupProps> = ({ closePopup }) =>{
    
    const [showModal, setShowModal] = useState(true);
     
    const handleClose = () => {
        setShowModal(false);
        closePopup(); // Close the popup completely
    };
    return (
        <>
            {showModal && (
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-third outline-none focus:outline-none">
                            {/*header*/}
                            {/* <div className="flex items-start justify-between p-5 border-b border-solid border-neutral-300 rounded-t">
                                <h3 className="text-2xl font-semibold">Confirmez-vous la suppression?</h3>
   
                            </div> */}
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                Si vous confirmez, votre offre sera définitivement effacé. </p>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-neutral-300 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={handleClose}
                                >
                                    Fermer
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={handleClose}
                                >
                                    Confirmer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}