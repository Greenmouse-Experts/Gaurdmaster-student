import { Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar"
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Course";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import History from "./pages/History";


function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/*" element={<Dashboard/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/history" element={<History/>}/>
      </Routes>

    </>
  );
}

export default App;
