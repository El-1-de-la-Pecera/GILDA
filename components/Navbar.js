import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto px-7">
        <div className="inline-flex items-center">
          <Link href="/about">
            <h1 className="text-2xl font-black leading-normal mt-0 mb-2 text-pink-800">
              GILDA
            </h1>
          </Link>
          <Link href="/products">
            <svg
              className="ml-8 h-8 w-8 text-black"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <polyline points="5 12 3 12 12 3 21 12 19 12" />{" "}
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />{" "}
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
          </Link>
        </div>

        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link href="/new">
                <a className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 ml-2 rounded">
                  Nuevo producto
                </a>
              </Link>

              <Link href="/newUser">
                <a className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 ml-2 rounded">
                  Nuevo usuario
                </a>
              </Link>

              <Link href="/users">
                <a className="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-4 ml-2 rounded">
                  Lista de usuarios
                </a>
              </Link>

                <button /*onClick={() => signOut("github")}*/ className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 ml-2 rounded">
                  Cerrar sesion
                </button>

                <button
                  type="button"
                  className="inline-flex items-center py-2 px-4 ml-2 text-sm font-medium text-gray-900 bg-white rounded-l-lg rounded-r-lg border border-gray-400 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                >
                  <svg
                    className="mr-2 w-4 h-4 fill-current"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Profile
                </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
