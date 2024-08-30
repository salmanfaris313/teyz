import React from "react";
import Image from "next/image";
import CalssicImg from "@/public/images/classic.webp";
import Featured from "@/public/images/featured.webp";
import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/solid";
function Layout(props) {
  return (
    <div>
      <div className="w-full flex flex-col  rounded-2xl py-6 mt-4">
        <h4 className="text-gray-700 flex justify-between font-semibold text-[14px] ">
          Choose a layout for your link
          <XMarkIcon className="w-[2rem] h-[2rem] bg-slate-200 rounded-full p-2 cursor-pointer hover:bg-red-500  mb-3" onClick={()=> props.SetcurrentComponent("")} />
        </h4>

        <div className="flex items-center ps-4 p-3 border border-gray-200 rounded-2xl shadow mb-3 cursor-pointer hover:bg-blue-100">
          <input
            id="bordered-radio-1"
            type="radio"
            name="bordered-radio"
            className="w-7 h-7 text-black bg-gray-100 border-gray-300 rounded-2xl"
          />
          <label
            htmlFor="bordered-radio-1"
            className="w-full cursor-pointer py-4 ms-2 text-sm font-medium text-black ml-6"
          >
            Classic
            <p className="text-black">Efficient, direct and compact.</p>
          </label>
          <Image
            src={CalssicImg}
            alt="Classic"
            className="w-[170px] mr-4"
          ></Image>
        </div>
        <div className="flex items-center ps-4 p-3 border border-gray-200  rounded-2xl shadow mb-3 cursor-pointer hover:bg-blue-100">
          <input
            id="bordered-radio-2"
            type="radio"
            name="bordered-radio"
            className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
          />
          <label
            htmlFor="bordered-radio-2"
            className="w-full py-4 ms-2 text-sm font-medium text-black  ml-6"
          >
            Featured
            <p className="text-black">
              Make your link stand out with a larger, more attractive display.
            </p>
            <button className="bg-black flex  px-20 rounded-2xl w-[full] text-white mt-4  h-10 transition duration-500 hover:bg-slate-100 hover:text-black py-2">
              <PhotoIcon className="w-6 mr-3 " /> Add Thumbnail
            </button>
          </label>
          <Image
            src={Featured}
            alt="Featured"
            className="w-[170px] mr-4"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Layout;
