import React, { useState  } from 'react';
import { Link  } from 'react-router-dom';

import { useSelector } from 'react-redux/es/hooks/useSelector';
const NavBar = () => {
  const {loggedIn} = useSelector(state => state.custom)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-amber-500 w-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/homepage/main">
                <p className='font-bold text-4xl font-serif sm:text-4xl text:black animate-pulse'>TechZone</p>
              </Link>
            </div>
            <div className="hidden sm:-my-px sm:ml-1 sm:flex">
              <Link to="/homepage/allItems" className="font-serif ml-3 inline-flex items-center px-4 py-2 text-base font-medium text-black hover:text-xl">Items</Link>
              <Link to="/homepage/categories" className=" font-serif ml-3 inline-flex items-center px-4 py-2 text-base font-medium text-black hover:text-xl">Categories</Link>
              <Link to="/homepage/cartItems" className="font-serif inline-flex items-center px-4 py-2 text-base font-medium text-black hover:text-xl">Cart</Link>
              <Link to="/homepage/favouriteItems" className="font-serif inline-flex items-center px-4 py-2 text-base font-medium text-black hover:text-xl">Favourites</Link>
              <Link to="/" className="font-serif inline-flex items-center px-4 py-2 text-base font-medium text-black hover:text-xl">Log Out</Link>
            </div>

          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <button type="button" className="inline-flex items-center justify-center h-16 w-16 py-2 rounded-md  hover:text-black focus:outline-none" onClick={toggleMenu}>
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                ) : ( 
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="flex flex-col justify-center items-center px-2 pt-2 pb-3 space-y-1">
              <Link to="/homepage/allItems" className="font-extrabold font-serif ml-3 inline-flex items-center px-4 py-2 text-lg  text-black hover:text-xl">All Items</Link>
              <Link to="/homepage/categories" className="font-extrabold font-serif ml-3 inline-flex items-center px-4 py-2 text-lg  text-black hover:text-xl">Categories</Link>
              <Link to="/homepage/cartItems" className="font-extrabold font-serif inline-flex items-center px-4 py-2 text-lg  text-black hover:text-xl">Cart</Link>
              <Link to="/homepage/favouriteItems" className="font-extrabold font-serif inline-flex items-center px-4 py-2 text-lg  text-black hover:text-xl">Favourites</Link>s
              <Link to="/register" className="font-extrabold font-serif inline-flex items-center px-4 py-2 text-lg  text-black hover:text-xl">Register</Link>
            </div>
          </div>
      )}
    </nav>

    );
};

export default NavBar;
