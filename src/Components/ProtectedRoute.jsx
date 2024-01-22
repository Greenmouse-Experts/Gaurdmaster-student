import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export const ProtectedRoute = () => {
    const auth = localStorage.getItem('guard_token')
    if (!auth) {
      window.location.replace('https://guardmaster-web.netlify.app/login');
    }
    return (
      <>
        <div>
            <Navbar/>
            <Outlet/>
        </div>
      </>
    );
  };