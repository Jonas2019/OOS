"use client";

import React from "react";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from "@clerk/nextjs";

const Store: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <SignedIn>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Welcome to the Store</h1>
          <UserButton afterSignOutUrl="/" />
        </div>
        {/* Add your store content here */}
        <p>Your store content goes here...</p>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn redirectUrl="/store" />
      </SignedOut>
    </div>
  );
};

export default Store;
