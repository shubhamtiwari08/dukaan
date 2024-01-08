import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/SideBar";
import MainRoutes from "./Routings/MainRoutes";

function App() {
  return (
    <div className="App flex items-start">
      <Sidebar/>
      <div className="w-full">
        {" "}
        <Header />
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
