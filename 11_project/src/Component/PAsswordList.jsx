import React from "react";
import Card from "./PasswordCard";
import { Car } from "lucide-react";
const PAsswordList = ({ vault, onDelete }) => {
  return (
    <div className="p-10">
      <h2 className="text-xl font-bold text-white mb-4">
        <div className="flex gap-4">
          {vault.map(function (val, idx) {
            return <Card key={idx} item={val} onDelete={onDelete} />;
          })}
        </div>
      </h2>
    </div>
  );
};

export default PAsswordList;
