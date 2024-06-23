import {ChangeEvent, KeyboardEvent, useState } from "react"






export const AddAdvantageComponent = ()=> {
    const [avantage, setAvantage] = useState<string[]>([]);
    const [currentInput, setCurrentInput] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentInput(event.target.value);
    };

    const handleAddAvantage = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === ',' && !avantage.includes(currentInput.trim())) {
            const trimmedInput = currentInput.trim().replace(/,/g, ''); // Remove commas from input
            if(trimmedInput !== '' && trimmedInput !== ','){
                setAvantage([...avantage, trimmedInput]);
                setCurrentInput('');
            }
            
           }
    };
    
    const removeAvantage = (index:number) => {
        setAvantage([...avantage.filter(tag => avantage.indexOf(tag) !== index)]);
    };
    // useEffect(() => {
    //    console.log(avantage)
    // }, [handleAddAvantage]);
    console.log(avantage)

    return (
        <div className=" mx-14 flex flex-row-4 justify-center">
            <div className="w-1/4 mx-14">
                <label
                    htmlFor="description"
                    className="w-full m-1 text-xl font-semibold">
                        Avantages:
                </label>
            </div>
            <div className="w-3/4">
                <input
                    type="text"
                    id="avantages"
                   // value= {currentInput}
                    onChange={handleInputChange}
                    onKeyUp={(e)=> handleAddAvantage(e)}
                    {...({ value: currentInput } as { value: string })}
                    placeholder="Press enter to add tags"
                    className=" block w-full rounded-md border-0 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>

                    <ul className="flex flex-row flex-wrap">
                        {
                            avantage.length>0 &&
                            avantage.map((adv,index) => (
                                <li key={index} className="p-2"> 
                                    <div key={index} className="tag-item inline-flex  items-start justify-start px-5 py-2 rounded-[32px] text-sm shadow-sm font-medium bg-secondary text-neutral-100 mr-2">
                                        <span className="text">{adv}</span>
                                        <span onClick={() => removeAvantage(index)} className="close cursor-pointer ml-2 hover:text-neutral-700">&times;</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
            </div>
        </div>
    )
}