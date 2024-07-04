import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-48">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h1 className="text-2xl font-bold mb-5">Aswin's Portfolio</h1>
          <p className="mb-5">
            Thank you for visiting my personal portfolio website. Connect with
            me over socials.
          </p>
          <p>Keep Rising 🚀. Connect with me over live chat!</p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-5">Quick Links</h1>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-5">Contact Info</h1>
          <ul className="space-y-2">
            <li>
              <h3 className="text-lg">123456789</h3>
            </li>
            <li>
              <span>temp@gmail.com</span>
            </li>
            <li>
              <p>Kerala, India</p>
            </li>
          </ul>
          <div className="flex space-x-4 mt-5">
            <a href="#" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-400">
              LinkedIn
            </a>
            <a href="#" className="hover:text-gray-400">
              Github
            </a>
            <a href="#" className="hover:text-gray-400">
              Instagram
            </a>
          </div>
        </div>
      </div>
      {/* divider line */}
      <div className="mb-10"></div>
      <div className="flex justify-between text-center items-center">
        <span>
          Designed With ❤️ By
          <a href="" className="text-gold pl-1">
            Aswin K
          </a>
        </span>
        <span>2024 © All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
