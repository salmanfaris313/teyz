import React from "react";
import { TrashIcon ,XMarkIcon } from "@heroicons/react/24/solid";
function DeleteBox(props) {
  return ( 
    <div className={"w-full flex-col  rounded-2xl py-6 mt-4 " + (!props.deletComponent ? " flex " : " hidden ")}>
         <h4 className="text-gray-700 flex justify-between font-semibold text-[14px] ">
         Delete forever.
          <XMarkIcon className="w-[2rem] h-[2rem] bg-slate-200 rounded-full p-2 cursor-pointer hover:bg-red-500  mb-3" onClick={()=> props.SetDeleteComponent(!props.deletComponent)} />
        </h4>
      <button className="bg-black flex  px-20 rounded-2xl w-[full] text-white mt-4 justify-center  h-10 transition duration-500 hover:bg-slate-100 hover:text-black py-2">
        <TrashIcon className="w-6 mr-3 " />Delete
      </button>
    </div>
  );
}

export default DeleteBox;
