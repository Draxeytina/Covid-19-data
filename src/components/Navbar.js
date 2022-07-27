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
  const [menuMovil, setMenuMovil] = useState(false);
  const [axn, setAxn] = useState(false);
  const cortain = useRef();

  const closeMenu = () => {
    setAxn(false);
  };

  useEffect(() => {
    if (axn) {
      cortain.current.style.display = 'block';
      setMenuMovil(true);
    } else {
      cortain.current.style.display = 'none';
      setMenuMovil(false);
    }
  }, [axn]);

  return (
    <>
      <header>
        <div className="container d-flex">
          <Link to="/" className="logo-link" onClick={() => closeMenu()}>
            <h1>Reddit</h1>
          </Link>

          <div
            className="movil-box"
            role="button"
            tabIndex={-1}
            onClick={() => setAxn(!axn)}
            onKeyUp={() => setAxn(!axn)}
          >
            {
              menuMovil ? (
                <FiX className="movil-box-icon" />
              ) : (
                <FiMenu className="movil-box-icon" />
              )
            }
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/stock%details">
                  Stock Details
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className={menuMovil ? 'menu-movil menu-show' : 'menu-movil menu-hide'}>
        <ul>
          <li role="presentation">
            <NavLink to="/home" onClick={() => closeMenu()}>
              Home
            </NavLink>
          </li>
          <li role="presentation">
            <NavLink to="/stock%details" onClick={() => closeMenu()}>
              Stock Details
            </NavLink>
          </li>
        </ul>
      </div>

      <div ref={cortain} className={menuMovil ? 'cortain cortain-show' : 'cortain cortain-hide'}>.</div>
    </>
  );
};

export default Navbar;
