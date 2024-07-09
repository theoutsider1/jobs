import { RecruiterProfil } from "./RecruiterProfile"
import { OffersManagement } from "../../Recruteur/JobsManagement/JobsManagement";
import { useState } from "react";
import { AddOfferFormComponent } from "../../Recruteur/AddOffersPage/AddOfferFrom/AddOfferComponent";

export const MainProfileComponent = ()=>{
    const [selectedView, setSelectedView] = useState('offersManagement');

  const handleSelect = (view: string) => {
    setSelectedView(view);
  };
    return (
        <div className="main-container w-full flex flex-col-6">
            {/* SideBar */}
            <div className="w-1/6 bg-third ">
                <RecruiterProfil onSelect = {handleSelect} selectedView={selectedView}/>
            </div>

            {/* Selected Component */}
            <div className="content w-5/6 flex justify-center">
            {selectedView === 'offersManagement' &&  <OffersManagement/>}
            {selectedView === 'addOffer' &&  <AddOfferFormComponent/>}
            {selectedView === 'monProfile' &&  <OffersManagement/>}
            
            </div>

        </div>
    )
}