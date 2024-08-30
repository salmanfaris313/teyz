import React from "react";

function ProfileCard() {
  return (
    <div className="bg-white p-6 w-[100%]  mb-6  rounded-2xl">
      <div className="flex">
        <h4>Profile</h4>
      </div>
      <div className="md:flex w-full  ">
        <div className="md:flex flex-col w-full  ">
          <div className="mb-5 w-full">
            <input
              type="text"
              className="bg-gray-50 border  mt-4 border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 "
              placeholder=" Name"
              required=""
            />
          </div>
          <div className="mb-3 w-full">
            <input
              type="text"
              className="bg-gray-50 border   border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 "
              placeholder=" Bio"
              required=""
            />
          </div>

          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Photo
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 w-full p-2.5 "
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
          />
          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p>
          <button className="bg-black px-6 rounded-2xl w-[20%] text-white mt-4  h-10">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
