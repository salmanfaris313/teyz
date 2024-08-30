import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
function Navbar(props){
   return(
    <>
   <div className="flex items-center justify-between  w-full">

    <Bars3Icon onClick={()=>{props.SetShowSidebar(!props.showSidebar)}}  className="w-[2rem] h-[2rem]" />
    <div className="flex flex-col p-2 bg-green-100 rounded-3xl">
    <div className="px-5" role="alert">
        <a className="text-black mr-4 text-[15px] font-bold "> Your tyezis live: tyez..com/salmanyarddiant</a> 
         <button type="button" className="bg-black text-[15px] text-white hover:bg-white hover:text-black font-bold p-2 rounded-3xl" >Copy your Teys URL</button></div>
   
    </div>
    <button className="p-2 bg-blue-400 text-white rounded-3xl px-5 ">Share</button>
   </div>
    </>
   )
}
export default Navbar