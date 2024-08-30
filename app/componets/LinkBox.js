"use client";

import React, { useState } from "react";
import {
  PhotoIcon,
  LinkIcon,
  CubeIcon,
  ChartBarIcon,
  TrashIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import Layout from "./Layout";
import AddThumbnail from "./AddThumbnail";
import SocialIcon from "./SocialIcon";
import DeleteBox from "./DeleteBox";
function LinkBox(props) {
  const LinkIcons = [
    {
      icon: TableCellsIcon,
      name: "Layout",
      component: "Layout",
    },
    {
      icon: PhotoIcon,
      name: "Image",
      component: "AddImage",
    },
    {
      icon: LinkIcon,
      name: "Link",
    },
    {
      icon: ChartBarIcon,
      name: "photo",
    },
  ];

  const [currentComponent, SetcurrentComponent] = useState();
  const [deletComponent, SetDeleteComponent] = useState(true);

  return (
    <div>
      {props.createLinkBox.map((items, index) => {
        return (
          <div key={index} className="bg-white p-6 w-[100%] flex flex-col rounded-2xl mt-8">
            <input
              type="text"
              className="bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Headline title"
              required=""
            ></input>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="URL"
              required=""
            ></input>
            <div className="flex mt-4">
              {LinkIcons.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="shadow-xl p-2 rounded-md flex mr-5 "
                    data-tooltip-target="tooltip-default"
                  >
                    <item.icon
                      className="w-4 h-4 cursor-pointer hover:text-teal-600"
                      onClick={() => SetcurrentComponent(item.component)}
                    />
                  </div>
                );
              })}
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none    rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
              <TrashIcon
                className="w-4 h-4 cursor-pointer hover:text-red-400 mt-2  ml-5"
                onClick={() => SetDeleteComponent(false)}
              />
            </div>

            {currentComponent == "Layout" ? (
              <Layout SetcurrentComponent={SetcurrentComponent} />
            ) : (
              ""
            )}
            {currentComponent == "AddImage" ? (
              <AddThumbnail SetcurrentComponent={SetcurrentComponent} />
            ) : (
              ""
            )}
            <DeleteBox
              deletComponent={deletComponent}
              SetDeleteComponent={SetDeleteComponent}
            />
          </div>
        );
      })}
    </div>
  );
}

export default LinkBox;
