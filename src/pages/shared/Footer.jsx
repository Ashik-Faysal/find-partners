import React from "react";
import { AiFillMacCommand } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="container">
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500">
        <div className="footer p-10 text-base-content">
          <nav>
            <div className="flex gap-2 items-center">
              <AiFillMacCommand size={24} />
              <h4 className="text-2xl bg-gradient-to-t from-blue-500 via-teal-500 to-orange-500 text-transparent bg-clip-text">
                Find Partner
              </h4>
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
        <div className="py-4 px-12 flex justify-between">
          <p>
            Sambhaji Nagar, No2, St. Antory Road, Chember, Mumbai - 40007,
            Maharastra
          </p>
          <div className="md:flex gap-1 md:gap-0">
            <FaFacebook className="text-blue-500 text-2xl mr-4" />
            <FaInstagram className="text-pink-500 text-2xl mr-4" />
            <FaLinkedin className="text-indigo-500 text-2xl mr-4" />
            <FaWhatsapp className="text-green-500 text-2xl" />
          </div>
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
