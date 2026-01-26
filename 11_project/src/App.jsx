import React, { useState } from "react";
import Header from "./Component/Header";
import PasswordForm from "./Component/PasswordForm";
import PasswordCard from "./Component/PasswordCard";
import PAsswordList from "./Component/PAsswordList";

const App = () => {
  const [vault, setvault] = useState([]);
  function Delete(index){
    let newArr=vault.filter((item,i)=>{
      return i!=item
    })
    setvault(newArr);
  }
  function addData(data) {
    setvault((prev) => [...prev, data]);
    // console.log(data);
  }
  console.log(vault);
  return <div className="h-screen bg-gray-600">
    <PasswordForm onAdd={addData} />
    <PAsswordList vault={vault} onDelete={Delete} />
  </div>;
};

export default App;
