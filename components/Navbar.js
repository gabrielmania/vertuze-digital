import React from "react";

export default function Navbar() {
  const navLinks = [
    ["Home", "/"],
    ["Movies", "/movies"],
    ["TV Series", "/series"],
    ["About Us", "/about"],
    ["Contact Us", "/contact"],
  ].map(([link, url], i) => (
    <li key={i}>
      <a href={url} className="active:bg-secondary active:text-primary">
        {link}
      </a>
    </li>
  ));

  const userLinks = [
    ["Login", "/login"],
    ["Register", "/register"],
  ].map(([link, url], i) => (
    <li key={i}>
      <a href={url} className="active:bg-secondary active:text-primary">
        {link}
      </a>
    </li>
  ));

  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal p-0 hidden lg:flex">{userLinks}</ul>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            {navLinks}
            <div className="divider" />
            {userLinks}
          </ul>
        </div>
      </div>
    </div>
  );
}
