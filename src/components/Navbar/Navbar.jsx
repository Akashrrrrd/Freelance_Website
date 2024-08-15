import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaSearch, FaBriefcase, FaUserPlus, FaQuestionCircle, FaBell, FaUser, FaHome, FaStar, FaBook, FaRobot, FaNewspaper } from 'react-icons/fa';
import LoginPopup from '../../components/LoginPopup/LoginPopup';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/', icon: FaHome },
    { name: 'Find Work', path: '/find_work', icon: FaBriefcase },
    { name: 'Post a Job', path: '/post_job', icon: FaUserPlus },
    { name: 'How It Works', path: '/how_it_works', icon: FaQuestionCircle },
    { name: 'Top Ratings', path: '/rating_page', icon: FaStar },
    { name: 'Learning Hub', path: '/learning_hub', icon: FaBook },
    { name: 'AI', path: '/ai', icon: FaRobot },
    { name: 'Tech News', path: '/tech_news', icon: FaNewspaper },
  ];
  

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      <nav className={`navbar ${scrollPosition > 50 ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="navbar-search">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search jobs or freelancers"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit"><FaSearch /></button>
            </form>
          </div>
          <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.path}
                  className={activeItem === item.name ? 'active' : ''}
                  onClick={() => { setActiveItem(item.name); setIsOpen(false); }}
                >
                  <item.icon className="icon" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
            {!isLoggedIn ? (
              <li className="auth-item">
                <span className="btn-signup" onClick={() => { setShowLogin(true); setIsOpen(false); }}>Login</span>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/notifications" onClick={() => setIsOpen(false)}>
                    <FaBell className="icon" />
                    <span>Notifications</span>
                  </Link>
                </li>
                <li>
                  <Link to="/profile" onClick={() => setIsOpen(false)}>
                    <FaUser className="icon" />
                    <span>Profile</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    </>
  );
};

export default Navbar;
