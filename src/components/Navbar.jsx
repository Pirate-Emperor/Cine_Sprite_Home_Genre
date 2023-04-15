import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = ({homeMode, setHomeMode}) => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const homeClickHandler = () => {
    setHomeMode(false);
  };
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex item-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-cyan-600 text-4xl font-bold cursor-pointer pl-8">
          CINE SPRITE
        </h1>
      </Link>
      
      {user?.email ? (
        <div>
          <Link to="/genre" onClick={homeClickHandler}>
            <button className="text-cyan-500 text-2xl  cursor-pointer pr-4">
              Genre
            </button>
          </Link>
          <Link to="/account">
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
          <Link to="/genre" onClick={homeClickHandler}>
            <button className="text-cyan-500 text-2xl  cursor-pointer pr-4">
              Genre
            </button>
          </Link>
          <Link to="/signIn">
            <button className="text-cyan-500 text-2xl  cursor-pointer pr-4">Sign In</button>
          </Link>
          <Link to="/signUp">
            <button className="text-[#FFFDE3] text-2xl px-5 py-1.5 rounded cursor-pointer bg-cyan-600 ">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
