import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-[250px] bg-neutral-900 text-white py-4 container mx-auto flex justify-between items-center">
      <div className="container mx-auto px-2 text-center">
        <div className="flex items-center justify-center mb-2"></div>
        <div className="mb-4">
          <a
            href="/"
            className="mx-2 text-white hover:text-accent hover:transform hover:scale-110 hover:transition-transform hover:duration-300"
          >
            Home
          </a>
          <a
            href="/services"
            className="mx-2 text-white hover:text-accent hover:transform hover:scale-110 hover:transition-transform hover:duration-300"
          >
            Services
          </a>
          <a
            href="/contact"
            className="mx-2 text-white hover:text-accent hover:transform hover:scale-110 hover:transition-transform hover:duration-300"
          >
            Contact
          </a>
        </div>
        <div className="mb-4 flex justify-center space-x-4">
          <a
            href="https://github.com/CodePnut?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/vl1296/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://x.com/markadrianvel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
        </div>
        <div className="mb-4">
          &copy; {new Date().getFullYear()} Mark Velasquez. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
