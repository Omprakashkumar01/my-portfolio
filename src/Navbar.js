import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setShowMenuIcon(window.innerWidth < 768);
    };

    // Add scroll and resize event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check for screen width
    handleResize();

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : "transparent"} ${isOpen ? "open" : ""}`}>
      <h1 className="logo1">Portfolio</h1>
      {showMenuIcon && (
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Menu icon for mobile */}
        </div>
      )}
      <div className={`nav ${isOpen ? "show" : ""}`}>
        <ul><a href="/" target="_blank">Home</a></ul>
        <ul><a href="https://leetcode.com/u/omprakashkumar/" target="_blank" rel="noopener noreferrer">Leetcode</a></ul>
        <ul><a href="https://www.linkedin.com/in/om-prakash-kumar-557b18228/">Linkedin</a></ul>
        <ul><a href="/">Contact Me</a></ul>
      </div>
    </div>
  );
}
