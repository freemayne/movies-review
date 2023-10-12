import { useState } from 'react';
import { FaBars, FaTimes, FaVideoSlash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  
  return (
    <nav className="bg-black text-white shadow-lg">
      <div className=" p-4">
        <div className="flex items-center justify-between">
          <div className='flex items-center flex-row space-x-4'>

          <NavLink to="/" className="text-2xl font-bold text-yellow-500 flex items-center">
            <FaVideoSlash className="mr-2" />
            Gold
          </NavLink>


          <div className="hidden lg:flex space-x-4">
            <NavLink to="/" className="text-white hover:text-yellow-500 text-lg">
              Home
            </NavLink>
            <NavLink to="/watchList" className="text-white hover:text-yellow-500 text-lg">
              Watch List
            </NavLink>
          </div>
          </div>

          <div className="hidden lg:flex items-center lg:space-x-4">
            <button className="bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition duration-300 ease-in-out">
              Login
            </button>
            <button className="bg-transparent border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition duration-300 ease-in-out">
              Register
            </button>
          </div>
          <div className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-3xl text-white" />
            ) : (
              <FaBars className="text-3xl text-white" />
            )}
          </div>
               {/* Dropdown Menu */}
               {isMenuOpen && (
            <div className="lg:hidden flex flex-col  absolute max-w-[250px] rounded-b-md  top-16 left-100 z-50 right-0 bg-black text-white p-4">
              <NavLink to="/" className="block text-lg m-1" onClick={toggleMenu}>
                Home
              </NavLink>
              <NavLink to="/watchList" className="block text-lg py-1 m-1" onClick={toggleMenu}>
                Watch List
              </NavLink>
              <button className="bg-transparent border border-yellow-500 max-w-[100px] m-1 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition duration-300 ease-in-out" onClick={toggleMenu}>
                Login
              </button>
              <button className="bg-transparent border border-yellow-500 max-w-[100px] m-1 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition duration-300 ease-in-out" onClick={toggleMenu}>
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;