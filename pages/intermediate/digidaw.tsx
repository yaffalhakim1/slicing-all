import React from "react";
import Image from "next/image";
import Head from "next/head";

export default function Digidaw() {
  return (
    <>
      <Head>
        <title>digidaw</title>
      </Head>
      <div className="bg-[#353998]">
        <nav className="bg-[#353998] px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
          <div className="container flex flex-wrap items-center justify-between mx-auto ">
            <a className="flex items-center w-3/12">
              <span className="ml-3 text-xl font-semibold whitespace-nowraptext-white text-white">
                digidaw
              </span>
            </a>
            <div className="flex md:order-2">
              <button
                type="button"
                className="text-black bg-white border rounded-full hover:bg-blue-900 hover:text-white font-medium text-sm px-5 py-2 text-center mr-3 md:mr-0"
              >
                Sign In
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
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
              </button>
            </div>
            <div
              className="items-center hidden w-full md:flex md:w-7/12 md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 md:flex-row md:space-x-12 md:mt-0 md:text-sm md:font-medium md:border-0 text-white">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent  md:p-0 text-white hover:text-blue-500 "
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent   md:hover:text-blue-700 md:p-0 md:text-white hover:text-white md:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:text-white  hover:text-white md:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:text-white hover:text-white md:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mx-auto pt-36 md:flex">
          <div className="flex">
            <div className="md:w-8/12">
              <h1 className="text-5xl font-normal text-white leading-relaxed md:text-start text-center">
                Experience the power of professional UI kits
              </h1>
              <p className="text-gray-500 text-md leading-relaxed mt-6 md:mt-5 md:text-start text-center">
                Choose from a wide range of styles and themes to find the
                perfect fit for your project
              </p>
              <div className="flex flex-wrap justify-center md:justify-start mt-5">
                <button
                  type="button"
                  className="text-black bg-yellow-500 font-semibold rounded-full  text-sm px-5 py-2.5 text-center mr-3 md:mr-0 mt-5"
                >
                  Discover
                </button>
              </div>
              <div className="w-9/12  mt-10 mb-5 flex flex-row items-start">
                <Image
                  src="/images/intermediate/digidaw/blocks.png"
                  alt={""}
                  width={45}
                  height={45}
                />
                <div className="flex-col">
                  <h2 className="ml-5 text-white font-semibold">
                    Unlimited Blocks
                  </h2>
                  <p className="ml-5 mt-3 text-gray-400 font-normal leading-relaxed ">
                    Having access to unlimited blocks means that users can
                    create a wide range of designs without running out of
                    elements to work with.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-5/12 mt-5 md:mt-0">
            <Image
              src="/images/intermediate/digidaw/hero.png"
              alt={""}
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </>
  );
}
