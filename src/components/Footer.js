import React from "react";
import "../styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} RecipeApp. All rights reserved.</p>
      <p>
        Made with Love by <strong>Recipe Lovers</strong>
      </p>
    </footer>
  );
};

export default Footer;
