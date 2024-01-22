import { Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar"
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student*" element={<Dashboard/>}/>
      </Routes>

    </>
  );
}

export default App;
