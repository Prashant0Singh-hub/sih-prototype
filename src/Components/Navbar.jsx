import React from "react";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>EduPlay</div>
      <ul style={styles.menu}>
        <li style={styles.item}><a href="#" style={styles.link}>Home</a></li>
        <li style={styles.item}><a href="#" style={styles.link}>Games</a></li>
        <li style={styles.item}><a href="#" style={styles.link}>Leaderboard</a></li>
        <li style={styles.item}><a href="#" style={styles.link}>About</a></li>
      </ul>
      <button style={styles.button}>Login</button>
    </nav>
  );
}

const styles = {
  nav: {
    background: "#2c7a7b",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    fontFamily: "Arial, sans-serif",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },
  item: {
    marginLeft: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
  button: {
    background: "white",
    color: "#2c7a7b",
    border: "none",
    padding: "8px 14px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
