import React from "react";
import logo from "../assets/raviKumarLogo.webp";
import tripleP from "../assets/3p.png";  // Import the PNG file
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={tripleP} className="mx-2" width={50} height={33} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-4xl">
        <a
          href="www.linkedin.com/in/prathamesh-palve-093066284"
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
