import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar({ user }) {
  const router = useRouter();

  const navLinks = [
    ["Home", "/"],
    ["Movies", "/movies"],
    ["TV Series", "/series"],
    ["About Us", "/about"],
    ["Contact Us", "/contact"],
  ].map(([link, url], i) => (
    <li key={i}>
      <Link
        href={url}
        className={`font-bold active:bg-secondary active:text-primary ${
          router.pathname === url && "bg-secondary text-primary"
        }`}
      >
        {link}
      </Link>
    </li>
  ));

  const userLinks = !user ? (
    [
      ["Login", "/login"],
      ["Register", "/register"],
    ].map(([link, url], i) => (
      <li key={i}>
        <Link
          href={url}
          className={`font-bold active:bg-secondary active:text-primary ${
            router.pathname === url && "bg-secondary text-primary"
          }`}
        >
          {link}
        </Link>
      </li>
    ))
  ) : (
    <>
      <li>
        <button className="font-bold active:bg-secondary active:text-primary">
          {`Hi, ${user.firstName}!`}
        </button>
      </li>
      <li>
        <Link
          href="/api/logout"
          className="font-bold active:bg-secondary active:text-primary"
        >
          Logout
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-primary py-0 px-0 xl:px-24">
      <div className="navbar-start">
        <Image src="/logos/dark-bg.png" className="w-20" alt="Vertuze Digital Logo" width={500} height={500} />
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
