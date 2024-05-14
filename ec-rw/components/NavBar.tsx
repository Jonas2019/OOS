"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChefHat } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-emerald-700 flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white">
        <ChefHat size={32} />
        <span className="font-semibold text-xl tracking-tight ml-2">
          Company Name
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-emerald-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          {/* Placeholder for navigation links */}
        </div>
        <div>
          <Button variant="ghost" className="hover:bg-teal-600 text-white mr-4">
            Sign Up
          </Button>
          <Button className="bg-emerald-500 hover:bg-teal-600 text-white">
            Log In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
