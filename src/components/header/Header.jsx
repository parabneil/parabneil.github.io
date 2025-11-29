import React, { useEffect, useState } from "react";
import "./header.css";
import { headerMenus } from "../../utils/headerMenus";

const Header = () => {
  // const [toggle, setToggle] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  // Handle scroll header effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollHeader(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  // useEffect(() => {
  //   document.body.style.overflow = toggle ? "hidden" : "auto";
  // }, [toggle]);

  return (
    <header className={`header ${scrollHeader ? "scroll-header" : ""}`}>
      <nav className="nav container" role="navigation">
        <a href="#home" className="nav__logo">
          <span>NP</span>.dev
        </a>

        {/* MENU */}
        <div className="nav__menu">
          <ul className="nav__list grid">
            {headerMenus.map((item) => (
              <li className="nav__item" key={item.id}>
                <a
                  href={item.id}
                  className={`nav__link ${
                    activeNav === item.id ? "active-link" : ""
                  }`}
                  onClick={() => {
                    setActiveNav(item.id);
                  }}
                >
                  <i className={`uil ${item.icon} nav__icon`}></i>
                  <span className="nav__title">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
