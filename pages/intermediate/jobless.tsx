import Head from "next/head";
import React from "react";
import Image from "next/image";

export default function Jobless() {
  return (
    <>
      <Head>
        <title>Jobless</title>
      </Head>
      <div className="bg-white">
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  ">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap ">
                Jobless
              </span>
            </a>
            <div className="flex md:order-2">
              <button
                type="button"
                className="text-black border border-zinc-500 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
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
              <ul className="flex flex-col p-4 mt-4 border border-gray-100  bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-black font-semibold bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Post A Job
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mx-auto">
          <h1 className="font-bold text-4xl mt-24 text-center mx-auto md:w-6/12 leading-relaxed">
            Get Connected to the Best Remote Jobs in Your Field
          </h1>
          <p className="text-md font-regular text-gray-600 text-center mt-6 w-5/12 mx-auto">
            Discover a wide range of remote opportunities on our platform and
            take control of your career
          </p>

          <div className="md:flex justify-center text-center">
            <button
              type="button"
              className="text-white bg-blue-700 font-semibold rounded-full text-sm px-5 py-2.5 text-center mr-3 mt-5 "
            >
              Explore Remote Jobs
            </button>
            <a
              href=""
              className="underline text-blue-700 font-semibold ml-6 mt-7"
            >
              How it works?
            </a>
          </div>
          <p className="mb-3 font-semibold  text-center mt-5 md:flex">
            Featured Jobs
          </p>

          <div className="md:flex justify-evenly mx-5 md:mx-0">
            <div className="container md:w-4/12 w-full bg-blue-700 rounded-lg shadow-md mr-3">
              <div className="mt-5 mb-5 items-start container mx-auto">
                <div className="flex-col">
                  <div className="flex pt-3 md:pt-0">
                    <Image
                      src="/images/intermediate/jobless/figma.png"
                      alt={""}
                      width={45}
                      height={45}
                      className="ml-6 mt-3"
                    />
                    <div className="flex-col ml-3 mt-3">
                      <h2 className=" text-white font-semibold ">
                        Front-End Developer
                      </h2>
                      <p className="text-gray-400">figma</p>
                    </div>
                  </div>
                </div>
                <p className="ml-8 mt-3 text-gray-400 font-normal leading-relaxed md:w-3/4">
                  We are looking for an experienced front-end developer to join
                  our team.
                </p>
                <div className="flex ml-5 mt-5 justify-between pb-2 md:pb-0">
                  <p className="text-white rounded-full py-1 px-4 font-semibold">
                    Rust
                  </p>
                  <p className="mr-8 text-white font-semibold">
                    $70,000 - $90,000
                  </p>
                </div>
              </div>
            </div>
            <div className="container md:w-4/12 w-full bg-white rounded-lg shadow-md mr-3">
              <div className="mt-5 mb-5 items-start container mx-auto">
                <div className="flex-col">
                  <div className="flex  pt-3 md:pt-0">
                    <Image
                      src="/images/intermediate/jobless/fb.png"
                      alt={""}
                      width={50}
                      height={50}
                      className="ml-6"
                    />
                    <div className="flex-col ml-3">
                      <h2 className=" text-black font-semibold ">
                        Data Scientist
                      </h2>
                      <p className="text-gray-400">Facebook</p>
                    </div>
                  </div>
                </div>
                <p className="ml-8 mt-3 text-gray-400 font-normal leading-relaxed md:w-3/4">
                  We are seeking a data scientist to join our team.
                </p>
                <div className="flex ml-5 mt-5 justify-between pb-2 md:pb-0">
                  <p className="text-black rounded-full py-1 px-4 font-semibold">
                    Python
                  </p>
                  <p className="mr-8 text-black font-semibold">
                    $100,000 - $130,000
                  </p>
                </div>
              </div>
            </div>
            <div className="container md:w-4/12 w-full bg-white rounded-lg shadow-md mr-3">
              <div className="mt-5 mb-5 items-start container mx-auto">
                <div className="flex-col">
                  <div className="flex   pt-3 md:pt-0">
                    <Image
                      src="/images/intermediate/jobless/vercel.png"
                      alt={""}
                      width={50}
                      height={50}
                      className="ml-6"
                    />
                    <div className="flex-col ml-3">
                      <h2 className=" text-black font-semibold ">
                        Technical Writer
                      </h2>
                      <p className="text-gray-400">Vercel</p>
                    </div>
                  </div>
                </div>
                <p className="ml-8 mt-3 text-gray-400 font-normal leading-relaxed md:w-3/4">
                  We are seeking a technical writer to join our team.
                </p>
                <div className="flex ml-5 mt-5 justify-between pb-2 md:pb-0">
                  <p className="text-black rounded-full py-1 px-4 font-semibold">
                    Documentation
                  </p>
                  <p className="mr-8 text-black font-semibold">
                    $70,000 - $90,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
