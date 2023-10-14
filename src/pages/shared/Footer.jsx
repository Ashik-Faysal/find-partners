import React from "react";
import { AiFillMacCommand } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500">
        <div className="footer p-10 text-base-content">
          <nav>
            <div className="flex gap-2 items-center">
              <AiFillMacCommand size={24} />
              <h4 className="text-2xl">Find Partner</h4>
            </div>
            <p>
              India's first platform dedicated to simplifying partner search
            </p>
          </nav>
          <nav>
            <header className="footer-title">COMPANY </header>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Careers</a>
          </nav>
          <nav>
            <header className="footer-title">SOLUTION</header>
            <a className="link link-hover">Search</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Research</a>
            <a className="link link-hover">Academy</a>
          </nav>
          <nav>
            <header className="footer-title">Resources</header>
            <a className="link link-hover">Blogs</a>
            <a className="link link-hover">Forms</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Privacy</a>
            <a className="link link-hover">Terms</a>
            <a className="link link-hover">Accessibility</a>
          </nav>
          <nav>
            <header className="footer-title">Support</header>
            <a className="link link-hover">Help</a>
            <a className="link link-hover">Contact Us</a>
          </nav>
        </div>
        <div class="bg-white h-[1px] w-full my-4"></div>
        <div className="py-4 px-12">
          <p>
            Sambhaji Nagar, No2, St. Antory Road, Chember, Mumbai - 40007,
            Maharastra
          </p>
        </div>
      </div>
      <div className=" text-center items-center p-4 bg-black ">
        <p>
          Registered trademark of India Private Limited © 2023 Find Partner Inc.
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
