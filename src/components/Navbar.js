import React, {
  Fragment,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Link,
  NavLink,
} from 'react-router-dom';
import { FiX, FiMenu } from 'react-icons/fi';
import './navbar.scss';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [action, setAction] = useState(false);
  const visibility = useRef();

  const closeMenu = () => {
    setAction(false);
  };

  useEffect(() => {
    if (action) {
      visibility.current.style.display = 'block';
      setMenu(true);
    } else {
      visibility.current.style.display = 'none';
      setMenu(false);
    }
  }, [action]);

  return (
    <>
      <header>
        <div className="container d-flex">
          <Link to="/" className="logo-link" onClick={() => closeMenu()}>
            <h1>Covid 19 Statistics</h1>
          </Link>
          <div
            className="movil-box"
            role="button"
            tabIndex={-1}
            onClick={() => setAction(!action)}
            onKeyUp={() => setAction(!action)}
          >
            {
              menu ? (
                <FiX className="movil-box-icon" />
              ) : (
                <FiMenu className="movil-box-icon" />
              )
            }
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/local%data">
                  Local Statistics
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className={menu ? 'menu-movil menu-show' : 'menu-movil menu-hide'}>
        <ul>
          <li role="presentation">
            <NavLink to="/" onClick={() => closeMenu()}>
              Home
            </NavLink>
          </li>
          <li role="presentation">
            <NavLink to="/local%data" onClick={() => closeMenu()}>
              Local Statistics
            </NavLink>
          </li>
        </ul>
      </div>
      <div ref={visibility} className={menu ? 'visibility visibility-show' : 'visibility visibility-hide'}>.</div>
    </>
  );
};

export default Navbar;
