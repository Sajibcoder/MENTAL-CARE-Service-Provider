import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h2>MENTAL CARE</h2>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact & Book An Appoinment</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#counselor"}>Our Counselor (Psychiatrist)</HashLink>
      </main>
    </nav>
  );
};

export default Header;
