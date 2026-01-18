import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, ShoppingBag, Info, LogIn, UserPlus, LogOut, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setIsLoggedIn(true);
      try {
        const user = JSON.parse(userData);
        setUsername(user.username || '');
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    } else {
      setIsLoggedIn(false);
      setUsername('');
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUsername('');
    // Trigger storage event for cart context
    window.dispatchEvent(new Event('storage'));
    navigate('/');
  };

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/shop', label: 'Shop', icon: ShoppingBag },
    { path: '/about', label: 'About', icon: Info },
  ];

  const authLinks = isLoggedIn
    ? []
    : [
        { path: '/login', label: 'Log In', icon: LogIn },
        { path: '/signup', label: 'Sign Up', icon: UserPlus },
      ];

  return (
    <nav className="bg-black/90 px-4 py-4 sticky top-0 z-50 shadow-[0_4px_10px_rgba(255,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-red-600 text-2xl font-bold shadow-[0_0_10px_rgba(255,0,0,0.5)]">
          AstraGhar
        </Link>
        <ul className="flex gap-4 list-none items-center">
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
          
          {isLoggedIn ? (
            <>
              <li className="flex items-center gap-2 text-green-400">
                <User size={18} />
                <span className="text-sm">{username}</span>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 text-red-600 no-underline transition-all duration-300 hover:text-white hover:scale-110"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </li>
            </>
          ) : (
            authLinks.map(({ path, label, icon: Icon }) => (
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
            ))
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

