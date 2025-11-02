import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-gray-800 text-white p-10">
      <aside className="flex flex-col items-start gap-4">

        <img src={logo} alt="Logo" className="w-12 h-12" />
        <p>
          SkillSwap
          <br />
          Learn, Teach, and Share Skills Locally
        </p>
      </aside>

      <nav>
        <h6 className="footer-title text-white">Services</h6>
        <a className="link link-hover text-gray-300">Branding</a>
        <a className="link link-hover text-gray-300">Design</a>
        <a className="link link-hover text-gray-300">Marketing</a>
        <a className="link link-hover text-gray-300">Advertisement</a>
      </nav>

      <nav>
        <h6 className="footer-title text-white">Company</h6>
        <a className="link link-hover text-gray-300">About us</a>
        <a className="link link-hover text-gray-300">Contact</a>
        <a className="link link-hover text-gray-300">Jobs</a>
        <a className="link link-hover text-gray-300">Press kit</a>
      </nav>

      <nav>
        <h6 className="footer-title text-white">Legal</h6>
        <a className="link link-hover text-gray-300">Terms of use</a>
        <a className="link link-hover text-gray-300">Privacy policy</a>
        <a className="link link-hover text-gray-300">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
