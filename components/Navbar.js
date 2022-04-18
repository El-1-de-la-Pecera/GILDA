import Link from "next/link";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

function Navbar() {
  const { user } = useUser();
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto px-7">
        <Link href="/">
          <a className="flex">
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
              Gilda
            </span>
          </a>
        </Link>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link href="/new">
                <a className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 ml-2 rounded">
                  Nuevo producto
                </a>
              </Link>
              <Link href="/api/auth/login">
                <a className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 ml-2 rounded">
                  Login
                </a>
              </Link>
              <Link href="/api/auth/logout">
                <a className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 ml-2 rounded">
                  Logout
                </a>
              </Link>

              <Link href="profile">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ml-2 ring-white"
                  src={user.picture}
                  alt={user.name}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
