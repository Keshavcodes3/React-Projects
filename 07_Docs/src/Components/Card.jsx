import React from "react";
import { FileAxis3d ,UserPlus ,Forward, Download, DownloadIcon } from "lucide-react";
const Card = ({Data}) => {
  return (
    <div className="w-60 h-72 rounded-[20px] bg-zinc-400 relative px-8 py-10 overflow-hidden">
      <FileAxis3d />
      <p className="text-sm leading-tight font-semibold text-gray-800 mt-3">
        {Data.desc}
      </p>
      <div className="flex py-5 items-center justify-between">
        <h1 className="flex items-center justify-center p-2 bg-blue-400 rounded-full">{Data.filesize}</h1>
        <h1 className="flex items-center justify-center p-2 bg-blue-400 rounded-full"><Forward/></h1>
      </div>
      <div className="absolute w-full bottom-0 left-0 p-5 h-15 bg-green-400 flex justify-between items-center">
        <h1 className="text-xl text-gray-800 font-bold">Download Now</h1>
        <h1><DownloadIcon/></h1>
      </div>
    </div>
  );
};

export default Card;
