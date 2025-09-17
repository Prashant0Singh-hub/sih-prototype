import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open on mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">EduPlay</div>
      <button
        className={`navbar-hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`navbar-menu${menuOpen ? " open" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Games</a>
        </li>
        <li>
          <a href="#">Leaderboard</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li className="navbar-mobile-button">
          <button className="navbar-login">Login</button>
        </li>
      </ul>
      <div className="navbar-desktop-button">
        <button className="navbar-login">Login</button>
      </div>
      {/* Responsive styles */}
      <style>{`
        .navbar {
          background: #2c7a7b;
          color: white;
          display: flex;
          align-items: center;
          padding: 10px 20px;
          font-family: Arial, sans-serif;
          position: relative;
          z-index: 10;
        }
        .navbar-logo {
          font-size: 20px;
          font-weight: bold;
          z-index: 12;
        }
        .navbar-menu {
          list-style: none;
          display: flex;
          margin: 0;
          padding: 0;
          align-items: center;
          transition: right 0.3s;
        }
        .navbar-menu li {
          margin-left: 20px;
        }
        .navbar-menu a {
          color: white;
          text-decoration: none;
          font-size: 16px;
        }
        .navbar-login {
          background: white;
          color: #2c7a7b;
          border: none;
          padding: 8px 14px;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
        }
        .navbar-desktop-button {
          margin-left: 20px;
        }
        .navbar-mobile-button {
          display: none;
        }
        .navbar-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 20;
          margin-left: 10px;
        }
        .navbar-hamburger span {
          width: 22px;
          height: 3px;
          background: white;
          margin: 3px 0;
          border-radius: 2px;
          transition: all 0.3s;
          display: block;
        }
        /* Hamburger animation */
        .navbar-hamburger.open span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }
        .navbar-hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .navbar-hamburger.open span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }
        @media (max-width: 768px) {
          .navbar-menu {
            flex-direction: column;
            position: fixed;
            top: 0;
            right: -220px;
            width: 200px;
            height: 100vh;
            background: #2c7a7b;
            padding-top: 60px;
            box-shadow: -2px 0 8px rgba(0,0,0,0.1);
            z-index: 15;
            transition: right 0.3s;
            display: flex;
          }
          .navbar-menu.open {
            right: 0;
          }
          .navbar-hamburger {
            display: flex;
          }
          .navbar-desktop-button {
            display: none;
          }
          .navbar-mobile-button {
            display: block;
            margin: 20px 0 0 20px;
          }
          .navbar-menu li {
            margin: 18px 0 0 20px;
          }
        }
      `}</style>
    </nav>
  );
}
