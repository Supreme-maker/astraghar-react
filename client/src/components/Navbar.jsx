import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, Info, LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/shop', label: 'Shop', icon: ShoppingBag },
    { path: '/about', label: 'About', icon: Info },
    { path: '/login', label: 'Log In', icon: LogIn },
    { path: '/signup', label: 'Sign Up', icon: UserPlus },
  ];

  return (
    <nav className="bg-black/90 px-4 py-4 sticky top-0 z-50 shadow-[0_4px_10px_rgba(255,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-red-600 text-2xl font-bold shadow-[0_0_10px_rgba(255,0,0,0.5)]">
          AstraGhar
        </Link>
        <ul className="flex gap-4 list-none">
          {navLinks.map(({ path, label, icon: Icon }) => (
            <li key={path}>
              <Link
                to={path}
                className={`flex items-center gap-1 text-red-600 no-underline transition-all duration-300 hover:text-white hover:scale-110 ${
                  location.pathname === path ? 'text-white' : ''
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

