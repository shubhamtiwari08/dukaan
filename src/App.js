import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/SideBar";
import MainRoutes from "./Routings/MainRoutes";

function App() {
  return (
    <div className="App flex items-start">
       <div className="fixed top-0 left-0">
       <Sidebar/>
       </div>
      <div className="w-full ml-[212px] overflow-auto pb-16">
        {" "}
        <Header />
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
