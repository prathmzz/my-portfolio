import React from "react";
// Removed unused 'logo' import
// import logo from "../assets/raviKumarLogo.webp";
// Removed unused 'FaInstagram' import
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import letterP from "../assets/letter-p.png"; // Corrected import

const Nav = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center h-20 w-20">
        <a href="/" aria-label="Home">
          <img src={letterP} alt="Logo" className="" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-4xl">
        <a
          href="https://www.linkedin.com/in/prathamesh-palve-093066284"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/prathmzz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/prathmzz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
