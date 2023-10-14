import React, { useState } from "react";
import { AiFillMacCommand, AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleSolutionDropdown = () => {
    setIsSolutionOpen(!isSolutionOpen);
  };

  const toggleFeaturesDropdown = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  return (
    <>
      <div className="flex justify-between px-4 py-2 ">
        <div className="flex items-center gap-2">
          <AiFillMacCommand size={24} />
          <h4 className="text-2xl">Find Partner</h4>
        </div>
        <div className="flex items-center gap-4">
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="m-1 flex items-center">
              <span>Solutions</span>
              <AiOutlineDown size={10} className="mt-1 ml-1 text-blue-500" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Search</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Research</a>
              </li>
              <li>
                <a>Academy</a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="m-1 flex items-center">
              <span>Features</span>
              <AiOutlineDown size={10} className="mt-1 ml-1 text-blue-500" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Forms</a>
              </li>
            </ul>
          </div>
          <div>
            <a href="#">Blog</a>
          </div>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="m-1 flex items-center">
              <span>About</span>
              <AiOutlineDown size={10} className="mt-1 ml-1 text-blue-500" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Privacy</a>
              </li>
              <li>
                <a>Terms</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link className="btn btn-outline" href="/login">Login</Link>
          <Link className="btn btn-info" href="/register">Register</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
