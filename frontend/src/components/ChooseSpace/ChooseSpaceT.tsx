import logo from "../../assets/2jobs.svg";
import candSpaceSvg from "../../assets/candSpaceSvg.svg";
import miniLines from "../../assets/miniLines.svg";
import downloadSvg from "../../assets/downloadSVG.svg";
import secondStepSvg from "../../assets/secondStepSvg.svg";
import groupeAs from "../../assets/groupAs.svg";
import groupeBs from "../../assets/groupBs.svg";


export const ChooseSpace= ()=> {

  
  return (
    <div className=" max-w-full mx-auto bg-secondary flex flex-col justify-start items-center ">
      <div className="p-5 md:w-auto w-full flex justify-center  ">
          <img src={logo} alt="2jobs" className="md:cursor-pointer w-64" />          
      </div>
      <div className="flex gap-56">

          <div className="flex flex-col">
            {/* left side */}

            {/* Title */}
            <div>
              <h4 className="text-4xl font-semibold">Sélectionner l’offre</h4>
            </div>
            
            <div className="flex flex-row justify-center p-5">

                {/* Sec Col bullet and checked svg */}

                <div className="pt-10 pr-4">
                  {/* bullet */}
                  <div className="relative flex justify-center items-center bg-third w-8 h-8 border-solid border-rose-950 rounded-full" >1</div>
                  <img src={miniLines} alt="" className="absolute h-64"/>
                </div>

                {/* checked svg */}
                <div className="px-5">
                    <img src={candSpaceSvg} alt="" className="h-24" />
                </div>

            </div>

            {/* DownLoad svg Col 2 */}
            <div className=" mt-48 flex justify-start items-center gap-12 pb-5">
              <div className="-mt-14">
                <img src={downloadSvg} alt="" className="h-24" />
                <span className="py-10 text-white text-xl font-normal ">Inserer CV</span>
              </div>
              <div className="mt-8">
                <img src={secondStepSvg} alt="" className=" h-10" />
              </div>
            </div>

            {/* button & underline */}

              
              <div className="flex flex-col m-2 py-2 justify-center items-center">
              
              <div>
              <button 
                
                className='bg-teal-100 text-black py-2 px-6 rounded-lg hover:bg-teal-200'>
                    C'est parti
              </button>
              </div>
              <div className="py-2">
                <span className="underline">Vous êtes un Candidat</span>
              </div>
           
              
              
            </div>
          </div>

          {/* Espace recruteur */}

          <div className="flex flex-col">
            <div>
              <h4 className="text-4xl font-semibold">Créer le compte</h4>
            </div>
            <div className="flex flex-row justify-center p-5">

                {/* Sec Col bullet and checked svg */}

                <div className="pt-10 pr-4">
                  {/* bullet */}
                  <div className="relative flex justify-center items-center bg-third w-8 h-8 border-solid border-rose-950 rounded-full" >1</div>
                  <img src={miniLines} alt="" className="absolute h-64"/>
                </div>

                {/* checked svg */}
                <div className="px-5">
                    <img src={groupeAs} alt="" className="h-24" />
                </div>

            </div>

            {/* DownLoad svg Col 2 */}
            <div className=" mt-48 flex justify-start items-center gap-3 pb-5">
              <div className="-mt-14">
                <img src={groupeBs} alt="" className="h-24" />
                <span className="text-white text-xl font-normal ">Publier l’offre</span>
              </div>
              <div className="mt-8">
                <img src={secondStepSvg} alt="" className="h-10" />
              </div>
            </div>

               {/* button & underline */}

            <div className="flex flex-col m-2 py-2 justify-center items-center">
              
              <div>
              <button 
                
                className='bg-teal-100 text-black py-2 px-6 rounded-lg hover:bg-teal-200'>
                    C'est parti
              </button>
              </div>
              <div className="py-2">
                <span className="underline">Vous êtes un recruteur</span>
              </div>
            </div>
            
          </div>

      </div>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      {/* <div className="flex-1">
        <h2 className="text-xl font-medium text-black">
          {currentRole === "candidat"
            ? "Vous êtes un candidat"
            : "Vous êtes un recruteur"}
        </h2>
        <p className="text-gray-500">
          {currentRole === "candidat"
            ? "1 Créer le compte\nPOST\nPublier l'offre"
            : "1 Sélectionner l'offre\nInsérer CV"}
        </p>
      </div>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded shadow"
        onClick={() => setCurrentRole(currentRole === "candidat" ? "recruteur" : "candidat")}
      >
        C'est parti
      </button> */}
    </div>
  );
}
