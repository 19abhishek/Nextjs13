import Link from "next/link";
import React from "react";
import "../styles/globals.css";

function Header() {
  return (
    <header className="p-5 bg-blue-300">
      <p className="text-bold text-white-500 border-r-2">
        <Link href="/" className="p-2 bg-white text-blue-500 rounded-md">
          Home
        </Link>
      </p>
    </header>
  );
}

export default Header;
