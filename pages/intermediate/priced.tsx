import Head from "next/head";
import React from "react";

export default function Priced() {
  return (
    <>
      <Head>
        <title>Strawrage</title>
      </Head>
      <div className="bg-[#5B41FB]">
        <header>
          <nav className="bg-[#5B41FB] border-gray-200 px-2 sm:px-4 py-2.5  ">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <a className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white italic">
                  Strawrage
                </span>
              </a>
              <div className="flex md:order-2">
                <button
                  type="button"
                  className="text-white bg-black font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
                >
                  Sign Up{" "}
                </button>
                <button
                  data-collapse-toggle="navbar-cta"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-cta"
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
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-cta"
              >
                <ul className="flex flex-col p-4 mt-4 border border-gray-100  bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-normal md:border-0 md:bg-transparent">
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-white font-semibold bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 "
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white text-white opacity-80 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "
                    >
                      Product
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="block py-2 pl-3 pr-4 text-white opacity-80 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-white opacity-80 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <div className="container mx-auto">
          <h1 className="text-center mt-28 text-white font-semibold text-4xl mx-auto justify-center items-center md:w-5/12  leading-relaxed">
            <span className="underline">Secure and Reliable</span> Cloud Storage
            for Your Data
          </h1>
          <p className="text-center font-medium text-md text-white opacity-75 mt-10">
            Scalable storage solutions for businesses of all sizes
          </p>{" "}
        </div>
        <div className="container mx-auto md:flex mt-8">
          <div className="w-4/12 mx-auto">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
              <p className="font-semibold text-black text-sm">Basic</p>
              <a href="#">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 ">
                  $5 <span className="text-sm font-normal">/ month</span>
                </h5>
              </a>
              <p className="mb-3 text-sm text-gray-500 font-regular">
                A budget-friendly option for individuals and small businesses.
              </p>
              <a
                href="#"
                className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7C67FE] rounded-lg hover:bg-purple-800"
              >
                Get Started
              </a>
              <p className="mt-4 text-sm text-gray-500">Features</p>

              <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 mt-4">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  10 GB storage
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Basic file collaboration
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Mobile app access
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  File synchronization across devices
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Support for common file types
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-red-500  flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Automatic file backup
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-red-500  flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Advanced security features
                </li>
              </ul>
            </div>
          </div>
          <div className="w-4/12 mx-auto mt-3">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
              <p className="font-semibold text-black text-sm">Professional</p>
              <a href="#">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 ">
                  $15 <span className="text-sm font-normal">/ month</span>
                </h5>
              </a>
              <p className="mb-3 text-sm text-gray-500 font-regular">
                A comprehensive option for businesses with more advanced needs.
              </p>
              <a
                href="#"
                className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7C67FE] rounded-lg hover:bg-purple-800"
              >
                Get Started
              </a>
              <p className="mt-4 text-sm text-gray-500">Features</p>

              <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 mt-4">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  100 GB storage
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Advanced file collaboration
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Mobile app access
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  File synchronization across devices
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Support for common file types
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500  flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Automatic file backup
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500  flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Advanced security features
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500  flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Purchase additional features{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="w-4/12 mx-auto mt-3">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
              <p className="font-semibold text-black text-sm">Enterprise</p>
              <a href="#">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 ">
                  Custom
                </h5>
              </a>
              <p className="mb-3 text-sm text-gray-500 font-regular">
                A customizable plan for large organizations with specific needs.
              </p>
              <a
                href="#"
                className="inline-flex w-full items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7C67FE] rounded-lg hover:bg-purple-800"
              >
                Get Started
              </a>
              <p className="mt-4 text-sm text-gray-500">Features</p>

              <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 mt-4">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  10 GB storage
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Basic file collaboration
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Mobile app access
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  File synchronization across devices
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Support for common file types
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500  flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Automatic file backup
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500  flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Advanced security features
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500  flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Customizable features{" "}
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5 text-green-500  flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Purchase additional features{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
