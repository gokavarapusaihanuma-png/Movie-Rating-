import React from "react";
import logoWhite from "../assets/logo_white-removebg-preview.png";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="flex items-center gap-6 px-6 h-10 border-b border-gray-200">
      <img src={logoWhite} alt="SHV Prime Logo" className="h-15 w-auto" />
      <Link to="/" className="text-blue-500 font-medium hover:text-blue-600">
        Movies
      </Link>

      <Link
        to="/watchlist"
        className="text-blue-500 font-medium hover:text-blue-600"
      >
        Watch List
      </Link>
    </div>
  );
}

export default Nav;
