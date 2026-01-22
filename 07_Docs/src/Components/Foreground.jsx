import React, { useState } from "react";
import Card from "./Card";

const Foreground = () => {
    const Data=[
        {desc:'lorem fgfweg fklbnd sfgjmn ergjn erg vj',filesize:'.9mb' , Close:true,tag:{isOpen:false,tagTitle:'Download',tagColor:'green'}}
    ]
  return (
    <div className="fixed top-0 left-0 z-3   w-full h-full bg-sky-900/50 p-20">
      {Data.map(function(val){
        return <Card Data={val}/>
      })}

    </div>
  );
};

export default Foreground;
