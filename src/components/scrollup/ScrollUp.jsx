import React, { useEffect, useState } from "react";
import "./scrollup.css";

const ScrollUp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 560) setShow(true);
      else setShow(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a href="#home" className={`scrollup ${show ? "show-scroll" : ""}`}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
