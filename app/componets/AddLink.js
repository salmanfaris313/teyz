"use client";
import React, { useState } from "react";
import SocialIcon from "./SocialIcon";
import { XMarkIcon, TableCellsIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
function AddLink(props) {
  
  const [addLinkOpen, SetaddLinkOpen] = useState(false);

  function AddBox() {
    const AddDiv = [
      {
        id: 1,
      },
    ];

    props.SetcreateLinkBox([...props.createLinkBox, AddDiv]);
  }

  return (
    <div className="bg-white p-6 w-[100%] flex flex-col rounded-2xl">
      <button
        className={
          "bg-blue-400 rounded-2xl  hover:bg-black hover:text-white  justify-center  transition duration-500  p-2 text-white " +
          (!addLinkOpen ? " flex " : " hidden ")
        }
        onClick={() => {
          SetaddLinkOpen(!addLinkOpen);
        }}
      >
        Add Link
      </button>
      <div className={"flex-col " + (addLinkOpen ? " flex " : " hidden ")}>
        <div className="flex justify-end ">
          <XMarkIcon
            className="w-[2rem] h-[2rem] bg-slate-200 rounded-full p-2 cursor-pointer hover:bg-red-500  mb-3"
            onClick={() => {
              SetaddLinkOpen(!addLinkOpen);
            }}
          />
        </div>
        <div className="flex  ">
          <input
            type="text"
            className="w-[80%] border border-black-500 mt-4 h-10 p-3"
            placeholder="URL"
          ></input>
          <button
            className="bg-black px-6 rounded-2xl w-[20%] text-white mt-4 ml-4 h-10 transition duration-500"
            onClick={() => {
              AddBox();
            }}
         
          >
            Add
          </button>
        </div>

      
         <SocialIcon />
      
      </div>
    </div>
  );
}

export default AddLink;
