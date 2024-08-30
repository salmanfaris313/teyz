"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/login.png";
import Link from "next/link";
import {
  LinkSlashIcon,
  Bars3Icon,
  ChartBarIcon,
  CubeIcon,
  CogIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
function Sidebar(props) {
  const sidebarpages = [
    {
      name: "Links",
      icon: LinkSlashIcon,
      link: "/dashboard",
    },
    {
      name: "Appearance",
      icon: CubeIcon,
      link: "/appearance",
    },
    {
      name: "Analytics",
      icon: ChartBarIcon,
      link: "/",
    },
    {
      name: "Settings",
      icon: CogIcon,
      link: "/",
    },
  ];

  

  const variants = {
    expanded: { width: "25%" },
    nonExpanded: { width: "5%" },
  };

  return (
    <motion.aside
      animate={props.showSidebar ? "expanded" : "nonExpanded"}
      variants={variants}
      className={
        "app-sidebar py-5 flex flex-col border border-r-1  h-screen relative mr-8 bg-white rounded-2xl shadow-xl shadow-slate-200 " +
        (props.showSidebar ? " w-[25%]  px-5" : " w-[5%] px-2 ")
      }
    >
      <div className="header-logo space-x-3 text-center">
        <Image src={Logo} alt="logo"></Image>
      </div>
      <div className="mt-9 flex flex-col space-y-8 ">
        {sidebarpages.map((item, index) => (
          <Link
            key={index}
            className="flex mt-2  p-2 rounded-2xl items-center bg-[#fff] text-black
         font-semibold shadow-2xl shadow-slate-400  px-5 py-3 hover:bg-green-700
          hover:text-white transition-all duration-500  "
            href={item.link}
          >
            <item.icon
              className={
                " h-[1-rem] " +
                (props.showSidebar ? " w-[1rem] mr-3  " : " w-[1.5rem] mr-0 ")
              }
            />
            <div className={"" + (props.showSidebar ? "flex" : "hidden")}>
              {item.name}
            </div>
          </Link>
        ))}
      </div>
      
    </motion.aside>
  );
}

export default Sidebar;
