import React from "react";
import { Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-blue-600"
          >
            <Twitter />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="hover:text-blue-400"
          >
            <Facebook />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="hover:text-pink-600"
          >
            <Instagram />
          </a>
        </div>
        <p className="text-sm">© 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
