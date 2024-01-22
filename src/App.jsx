import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./pages/MyProfile";
import LoginUser from "./pages/LoginUser";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      {/* <Navbar /> */}
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Dashboard />} />
          <Route path="/profile" element={<MyProfile />} />
        </Route>
        <Route path="/auth/:id" element={<LoginUser />} />
      </Routes>
    </>
  );
}

export default App;
