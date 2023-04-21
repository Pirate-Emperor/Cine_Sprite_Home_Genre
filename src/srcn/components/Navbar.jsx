

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faMountainSun } from "@fortawesome/free-solid-svg-icons";


import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import {
  StyledNavbar,
  StyledNavbarLink,
  StyledNavbarFeature,
  StyledDarkMode,
} from "./styles/Navbar.styled";
import "./navbar.css";
import logo from "../assets/main_logo.png";

import Input from "./Input";
const head = ""
const links = [
  {
    path: "/genre",
    label: "Genres",
    exect: "true",
  },
  {
    path: "/info1",
    label: "Analyzer",
    exect: "true",
  },
  {
    path: "/info2",
    label: "Dashboard",
    exect: "true",
  },
  {
    path: "/search",
    label: "Search",
    exect: "true",
  },
  // {
  //   path: "/home",
  //   label: "Home",
  //   exect: "true",
  // },
  // {
  //   path: "/search",
  //   label: "Search",
  //   exect: "false",
  // },
  // {
  //   path: "/info",
  //   label: "Info",
  //   exect: "false",
  // },
];

const Navbar = ({ colorMode, setColorMode, homeMode, setHomeMode }) => {
  // darkmode trigger
  // bool: true = light mode, false = dark mode
  const modeClickHandler = () => {
    setColorMode(!colorMode);
  };
  const homeClickHandler = () => {
    setHomeMode(true);
  };

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      homeClickHandler();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex item-center justify-between p-4 z-[100] w-full absolute">
      <div class="bubble small-left"></div>
      <div class="bubble s-medium-left"></div>
      <div class="bubble medium-left"></div>
      <div class="bubble large-left"></div>
      <div class="bubble small-l-left"></div>
      <div class="bubble small"></div>
      <div class="bubble s-medium"></div>
      <div class="bubble medium"></div>
      <div class="bubble large"></div>
      <div class="bubble small-l"></div>
      <Link className="loade" to="/" onClick={homeClickHandler}>
        <h1 className="text-cyan-600 text-4xl font-bold pl-8 cursor-pointer shadow-sm mask">
          CINE SPRITE
        </h1>
      </Link>
      <StyledNavbarFeature>
        <Input />
         <StyledDarkMode
          onClick={modeClickHandler}
          className={colorMode ? "lightMode" : "darkMode"}
        >
          <span></span>
          <p>
            <FontAwesomeIcon icon={faMountainSun} />
          </p>
          <p>
            <FontAwesomeIcon icon={faMoon} />
          </p>
        </StyledDarkMode>
      </StyledNavbarFeature>
      {user?.email ? (
        <div>
          <Link to="/" onClick={homeClickHandler}>
            <button className="text-cyan-500 text-2xl  cursor-pointer pr-4">
              Home
            </button>
          </Link>
          <Link to="/genre">
            <button className="text-cyan-500 text-2xl  cursor-pointer pr-4">
              Genre
            </button>
          </Link>
          <Link to="/search">
            <button className="text-cyan-500 text-2xl  cursor-pointer pr-4">
              Search
            </button>
          </Link>
          <Link to="/account" onClick={homeClickHandler}>
            <button className="text-cyan-500 text-2xl  cursor-pointer pr-4">Account</button>
          </Link>

          <button
            onClick={handleLogOut}
            className="text-[#FFFDE3] text-2xl px-5 py-1.5 rounded cursor-pointer bg-cyan-600  "
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/" onClick={homeClickHandler}>
            <button className="text-cyan-500 text-2xl  cursor-pointer pr-4">
              Home
            </button>
          </Link>
          <Link to="/genre">
            <button className="text-cyan-500 text-2xl  cursor-pointer pr-4">
              Genre
            </button>
          </Link>
          <Link to="/search">
            <button className="text-cyan-500 text-2xl  cursor-pointer pr-4">
              Search
            </button>
          </Link>
          <Link to="/signIn" onClick={homeClickHandler}>
            <button className="text-cyan-500 text-2xl  cursor-pointer pr-4">Sign In</button>
          </Link>
          <Link to="/signUp" onClick={homeClickHandler}>
            <button className="text-[#FFFDE3] text-2xl px-5 py-1.5 rounded cursor-pointer bg-cyan-600 ">
              Sign Up
            </button>
          </Link>
        </div>
      )}
      
    </div>
  //   <header>
  //   <StyledNavbar>
  //     <Link to={`/`}>
  //     {/* <ReactRoundedImage image={logo}
  //     imageWidth="50"
  //     imageHeight="50"
  //     roundedSize="0"/> */}
  //       <img src={logo} alt="CM_logo" />
  //     </Link>
  //     <StyledNavbarLink >
  //           <li key="Home">
  //             <NavLink
  //               onClick={homeClickHandler}
  //               exact={true}
  //               to={head+"/"}
  //               className={({ isActive }) => (isActive ? "isActived" : "")}
  //             >
  //               Home
  //             </NavLink>
  //           </li>
  //       {links.map(({ path, label, exact }) => {
  //         return (
  //           <li key={label}>
  //             <NavLink
  //               exact={exact}
  //               to={head+path}
  //               className={({ isActive }) => (isActive ? "isActived" : "")}
  //             >
  //               {label}
  //             </NavLink>
  //           </li>
  //         );
  //       })}
  //     </StyledNavbarLink>
  //     <StyledNavbarFeature>
  //       <Input />
  //       <StyledDarkMode
  //         onClick={modeClickHandler}
  //         className={colorMode ? "lightMode" : "darkMode"}
  //       >
  //         <span></span>
  //         <p>
  //           <FontAwesomeIcon icon={faMountainSun} />
  //         </p>
  //         <p>
  //           <FontAwesomeIcon icon={faMoon} />
  //         </p>
  //       </StyledDarkMode>
  //     </StyledNavbarFeature>
  //   </StyledNavbar>
  // </header>
  );
};

export default Navbar;
