import React, { useState, useEffect, useRef } from "react";
import "../Stylesheet/navbar.css";
import { Link, NavLink } from "react-router-dom";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import logo from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { FiHeart, FiUser } from "react-icons/fi";
import prof from "../assets/profile.png";
import { GrPower } from "react-icons/gr";
import { PiBooksDuotone } from "react-icons/pi";

const Navbar = () => {
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const toggleCategoriesDropdown = () => {
    setShowCategoriesDropdown(!showCategoriesDropdown);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !(
          event.target.className.includes("dropdown-trigger") ||
          event.target.className.includes("dropdown-content")
        )
      ) {
        setShowCategoriesDropdown(false);
        setShowProfileDropdown(false);
      }
      
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className={fix ? "navbar fixed" : "navbar"}>
      <div className="nav_body">
        <img className="logo" src={logo} alt="" />
        <div className="log">
          <div className="cate">
            <p onClick={toggleCategoriesDropdown}>
              {" "}
              CATEGORIES <IoIosArrowDown />
              {showCategoriesDropdown && (
                <div className="categories_drop">
                  <Link>Mini MBA</Link>
                  <Link>PPD Programs</Link>
                  <Link>PPC Programs</Link>
                  <Link>PC Programs</Link>
                </div>
              )}
            </p>

            <div className="search">
              <input type="text" placeholder="Search for anything" />
              <FiSearch />
            </div>

            <Link>My Courses</Link>
          </div>

          <div
            ref={dropdownRef}
            className={`nav_link ${isOpen ? "show_nav" : "hide_nav"} `}
          >
            <NavLink onClick={toggle} onBlur={hide} onFocus={show} to="/">
              {" "}
              Home
            </NavLink>
            
            <p ref={dropdownRef} onClick={toggleCategoriesDropdown}>
              {" "}
              
              CATEGORIES <IoIosArrowDown />
              
            </p>
            {showCategoriesDropdown && (
                <div className="cat">
                  <Link>Mini MBA</Link>
                  <Link>PPD Programs</Link>
                  <Link>PPC Programs</Link>
                  <Link>PC Programs</Link>
                </div>
              )}
            <NavLink onClick={toggle} onBlur={hide} onFocus={show} to="">
            My Courses
            </NavLink>
            <NavLink onClick={toggle} onBlur={hide} onFocus={show} to="/student">
              Dashboard
            </NavLink>
            <NavLink className="hid" onClick={toggle} onBlur={hide} onFocus={show} to="contact">
             My Cart
            </NavLink>
            <NavLink className="hid" onClick={toggle} onBlur={hide} onFocus={show} to="contact">
              Notification
            </NavLink>
            <p
              to="/course"
              onClick={toggle}
              onBlur={hide}
              onFocus={show}
            >
              Log Out
            </p>
          </div>
        </div>
        <div className="icon">
          <p className="icon_span">
            <MdOutlineShoppingCart /> <span>0</span>
          </p>
          <p className="icon_span">
            <GoBell /> <span>0</span>
          </p>
          <p className="icon_span">
            <FiHeart /> <span>0</span>
          </p>

          <button className="nav_toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RiCloseFill /> : <RiMenuFill />}
          </button>

          <div className="prof_logo">
          <img src={prof} alt="" />
          </div>
          <p ref={dropdownRef} className="profile_logo" onClick={toggleProfileDropdown}>
            <img src={prof} alt="" /> <span>Hello</span>
            {showProfileDropdown && (
              <div className="profile_drop">
                <div className="prof_head">
                <img src={prof} alt="" /> <span>STUDENT</span>
                </div>
                <div className="prof_link">
                  <NavLink to="/student"><FiUser /> My Profile</NavLink>
                  <Link><PiBooksDuotone /> My Courses</Link>
                  <Link><GoBell />  Message</Link>
                  <Link> <MdOutlineShoppingCart /> Purchase History</Link>
                  
                </div>
                <p><GrPower /> Logout</p>
              </div>
            )}
          </p>
        </div>
      </div>

    
    </div>
  );
};

export default Navbar;
