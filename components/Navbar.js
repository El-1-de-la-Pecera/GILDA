import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto px-7">
        <Link href="/about">
        <h1 className="text-2xl font-black leading-normal mt-0 mb-2 text-pink-800">
            GILDA
          </h1>
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
                <button
                  type="button"
                  class="inline-flex items-center py-2 px-4 ml-2 text-sm font-medium text-gray-900 bg-white rounded-l-lg rounded-r-lg border border-gray-400 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  <svg
                    class="mr-2 w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Profile
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
