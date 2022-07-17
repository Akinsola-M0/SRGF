import React, { useState } from "react";


interface dataToSend {
    transferData: (place:string , time:number) => void
}

const RainGoFall: React.FC<dataToSend> = ({transferData}) => {

const [place,setPlace]= useState<string> ("");
const [time,setTime]=   useState<number> (0);

    const sendData = () => {
        transferData(place,time);
      }
      
      const updatePlace = (e:any) => {
        setPlace(e.target.value);
      }
      
      const updateTime = (e:any) => {
      setTime(e.target.value);
      }
      
    const submitValues = (e:any) => {
        e.preventDefault();
      
        sendData();
    
        setPlace('');
        setTime(0);
      }
    

    return(

        <div className="px-3 mt-4 laptop:mt-11">
        
          <div className="flex flex-col laptop:flex-row px-2 py-2 iphonex:px-5 iphonex:py-5  tablet:justify-center tablet:ml-20 laptop:ml-0 laptop:gap-x-3 font-Roboto ">
        
               <h1 className="text-xl iphoneSE:text-3xl tablet:text-4xl font-bold py-4"> Shey rain go fall for </h1>
        
        <div className="flex justify-end tablet:justify-center">
        <form className="flex flex-col gap-y-2 tablet:gap-y-3 laptop:gap-x-2  laptop:flex-row" onSubmit={submitValues}>
        
        <input type="text"  value={place}
           onChange={updatePlace} 
           placeholder="place"
           className="rounded-full px-2 py-1 tablet:px-4 tablet:py-3 border-2 border-gray-200 w-40 tablet:w-60 "></input>
        
        <select 
        value ={time}
        onChange={updateTime}
        className="px-2 py-1  tablet:px-4 tablet:py-3 tablet:w-60 mr-2 iphonex:mr-3 rounded-full border-2 border-gray-200 w-40 ">
             <option>time</option>
             <option value={0}>today</option>
             <option value={1}>tomorrow</option>
             <option value={2}>day-after tomorrow</option>
        </select>
        
        <button type="submit" className="rounded-full px-2 py-1  tablet:px-4 tablet:py-3 border-2 hover:border-blue-500 text-xl iphonex:text-3xl tablet:text-4xl w-20 mx-auto"> ? </button>
        
        </form>
        </div>
           
        
          </div>
        
        </div>
            )

}

export default RainGoFall