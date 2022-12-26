import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import RoutesComponent from "./config/RoutesComponent";
import Contact from "./pages/contact/Contact";
import Controlled from "./pages/controlled/Controlled";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Uncontrolled from "./pages/uncontrolled/Uncontrolled";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [change, setChange] = useState(true);

  const navigateFun = () => {
    navigate(-1);
  };

  return (
    <div>
      <span onClick={navigateFun}>Back</span>
      <Sidebar />
      <RoutesComponent />
    </div>
  );
}

export default App;
