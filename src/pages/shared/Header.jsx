import React, { useContext, useState } from "react";
import { AiFillMacCommand, AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => console.log(error));
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden p-4 flex justify-between items-center">
        <AiOutlineMenu
          size={24}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-blue-500 cursor-pointer"
        />
        <AiFillMacCommand size={24} />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden p-4 bg-white">
          <div className="flex justify-end">
            <MdCancel
              size={24}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-red-500 cursor-pointer"
            />
          </div>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      )}

      {/* Desktop Header */}
      <div className="hidden md:flex justify-between px-4 py-2">
        <Link to="/" className="flex items-center gap-2">
          <AiFillMacCommand size={24} />
          <h4 className="text-2xl bg-gradient-to-t from-blue-500 via-teal-500 to-orange-500 text-transparent bg-clip-text font-bold">
            Find Partner
          </h4>
        </Link>
        <div className="flex items-center gap-4">
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="m-1 flex items-center font-bold">
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
            <label tabIndex={0} className="m-1 flex items-center font-bold">
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
            <Link className="font-bold" to="/blogs">
              Blog
            </Link>
          </div>
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="m-1 flex items-center font-bold">
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
          {user ? (
            <>
              <img
                className="w-12 h-12 rounded-full"
                src={user.photoURL}
                alt=""
              />
              <button
                onClick={handleLogOut}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-blue-500 hover.bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-300">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
