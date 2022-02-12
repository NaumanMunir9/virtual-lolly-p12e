// libraries
import React from "react";
// styles
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer__container">
      <p>Built with Gatsby, Netlify, FaunaDB, and Graphql</p>
      <p>Made by MNM &copy; {new Date().getFullYear()} </p>
    </div>
  );
}
