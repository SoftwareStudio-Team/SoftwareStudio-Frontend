import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import { NavLink, Link } from "react-router-dom";

function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    // window.localStorage.removeItem("user")
  };
  let userData = window.localStorage.getItem("user");
  userData = JSON.parse(userData);

  if (userData != null) {
    var token = userData.username;
    var id = userData.id;
  }

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              Pantip
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-row items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          ></div>
          {/* <div> */}
          {/* {user ? (
          
            <ul class="flex flex-row nobull" > 
                 
            <li>
              <NavLink
                className=" flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                to={`/profile/${userData.id}` }
              >
              <i  className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">{token}</span>
              
              </NavLink>
            </li>
            
          </ul>
           ):(!user)} */}

          {/* </div>   */}

          {user ? (
            <div className="flex flex-row ">
              <ul class="flex flex-row nobull">
                <li>
                  <Link to="/createblog">
                    <button className=" flex items-center text-xl uppercase font-bold leading-snug bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2  hover:opacity-75">
                      Createblog
                      <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    </button>
                  </Link>
                </li>
                <li>
                  <NavLink
                    className=" flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                    to={`/profile/${id}`}
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">{token}</span>
                  </NavLink>
                </li>
                <li onClick={handleLogout}>
                  <NavLink
                    className=" flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                    to="/"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2"></span>
                    {user && "LOGOUT"}
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link to="/login">
                  <button className=" flex items-center text-xl uppercase font-bold leading-snug bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2  hover:opacity-75">
                    Createblog
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/login"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Login</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/register"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Register</span>
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
