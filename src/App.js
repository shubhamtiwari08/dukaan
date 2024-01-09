import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/SideBar";
import MainRoutes from "./Routings/MainRoutes";

function App() {

  const [toggle,setToggle] = useState(false)

  const handleToggle = ()=>{
    setToggle(!toggle)
  }


  return (
    <div className="App flex items-start">
       <div className={`fixed z-10 top-0 left-0 lg:block ${toggle ? "block":"hidden"}`}>
       <Sidebar handleToggle={handleToggle}/>
       </div>
      <div className="w-full lg:ml-[212px] overflow-auto pb-16">
        {" "}
        <Header  handleToggle={handleToggle}/>
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
