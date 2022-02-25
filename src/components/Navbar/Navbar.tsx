import './Navbar.scss';
import { RiMenu3Line } from 'react-icons/ri';
import { ImHome } from 'react-icons/im';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { pathname } = useLocation();

  return (
    <>
      <header
        className="header"
        style={{ backgroundColor: pathname === '/' ? '' : '#ef233c' }}
      >
        <nav className="container navbar">
          <Link to={`/`} className="logo">
            <h3>ESTATE</h3>
          </Link>
          <ul className="nav-links">
            <Link to={`/`} className="link">
              <li className="nav-home">
                <ImHome className="home_icon" />
              </li>
            </Link>
            <Link to={`/search?purpose=for-sale`} className="link">
              <li className="nav-link">For Sale</li>
            </Link>
            <Link to={`/search?purpose=for-rent`} className="link">
              <li className="nav-link">For Rent</li>
            </Link>
          </ul>
          <RiMenu3Line className="menu_icon" onClick={() => setOpen(!open)} />
        </nav>
      </header>
      {open && (
        <motion.aside
          initial={{ scaleX: 0, transformOrigin: 'right' }}
          animate={{ scaleX: 1, transition: { type: 'tween', duration: 0.5 } }}
          className="sidebar"
        >
          <AiOutlineCloseCircle
            onClick={() => setOpen(false)}
            className="close-btn"
          />
          <ul className="nav-links-mobile">
            <Link to={`/`} className="link">
              <motion.li
                onClick={() => setOpen(false)}
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'tween',
                    duration: 0.75,
                    delay: 0.5,
                  },
                }}
                className="nav-home"
              >
                Home
              </motion.li>
            </Link>
            <Link to={`/search?purpose=for-sale`} className="link">
              <motion.li
                onClick={() => setOpen(false)}
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'tween',
                    duration: 0.75,
                    delay: 0.75,
                  },
                }}
                className="nav-link"
              >
                For Sale
              </motion.li>
            </Link>
            <Link to={`/search?purpose=for-rent`} className="link">
              <motion.li
                onClick={() => setOpen(false)}
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'tween',
                    duration: 0.75,
                    delay: 1,
                  },
                }}
                className="nav-link"
              >
                For Rent
              </motion.li>
            </Link>
          </ul>
        </motion.aside>
      )}
    </>
  );
};

export default Navbar;
