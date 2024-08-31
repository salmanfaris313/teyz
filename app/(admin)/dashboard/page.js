'use client'
import AddLink from "@/app/componets/AddLink";
import LinkBox from "@/app/componets/LinkBox";
import MobileScreen from "@/app/componets/MobileScreen";

import React, { useState } from "react";


function Dashboard() {
  const [createLinkBox, SetcreateLinkBox] = useState([])  

 function removeLinkBox(deleteindex){
  const newLinkBox=[]

  createLinkBox.forEach((item,index) => {

    if(deleteindex != index ) {
      newLinkBox.push(item)
    }

  })

  SetcreateLinkBox(newLinkBox)

  }


  return (
    <div className="flex w-full">
      <div className="mb-5 w-3/4 mr-5">
        <AddLink  createLinkBox={createLinkBox}  SetcreateLinkBox={SetcreateLinkBox}  />
       {createLinkBox.map((item, index) =>{
        return(
          <LinkBox removeLinkBox={removeLinkBox} index={index}  linkData={item} />
        )
       
       })} 
      </div>
      <div className="mb-5 w-2/4 px-16">
        <MobileScreen  />
      </div>
    </div>
  );
}

export default Dashboard;
