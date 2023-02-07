import Head from "next/head";
import React from "react";
import Image from "next/image";

export default function Kourse() {
  return (
    <>
      <Head>
        <title>Kourse</title>
      </Head>
      <div className="bg-[#192653]">
        <nav className="bg-[#192653] border-gray-200 px-2 sm:px-4 py-2.5  ">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Kourse
              </span>
            </a>
            <div className="flex md:order-2">
              <button
                type="button"
                className="text-white bg-white opacity-20 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
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
                    className="block py-2 pl-3 pr-4 text-white font-semibold bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 "
                    aria-current="page"
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

        {/* content */}

        <div className="container mx-auto pt-36 md:flex  bg-[#192653]">
          <div className="flex">
            <div className="md:w-7/12">
              <h1 className="text-5xl font-normal text-white leading-relaxed md:text-start text-center">
                Elevate Your Career to the Next Level
              </h1>
              <p className="text-gray-500 text-md leading-relaxed mt-6 md:mt-5 md:text-start text-center">
                Get expert-led instruction from experienced professionals in
                Industry and gain valuable skills and knowledge that can be
                applied to your career or personal life.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start mt-5">
                <button
                  type="button"
                  className="text-white bg-orange-500 font-semibold rounded-full  text-sm px-5 py-2.5 text-center mr-3 md:mr-0 mt-5"
                >
                  Find a Course
                </button>
                <a
                  href=""
                  className="underline text-orange-500 font-semibold ml-6 mt-7"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-6/12 mt-5 md:mt-0">
            <Image
              src="/images/intermediate/kourse/cards.png"
              alt={""}
              width={480}
              height={480}
              className="pb-5"
            />
          </div>
        </div>

        <div className="container mx-auto">
          <div className="md:flex">
            <div className="w-6/12 mt-10 mb-5 flex flex-row items-start container mx-auto">
              <Image
                src="/images/intermediate/kourse/clock.png"
                alt={""}
                width={45}
                height={45}
              />

              <div className="flex-col">
                <h2 className="ml-5 text-white font-semibold">
                  Self-paced Learning
                </h2>
                <p className="ml-5 mt-3 text-gray-400 font-normal leading-relaxed md:w-3/4">
                  This feature allows learners to progress through the course at
                  their own pace, rather than being tied to a fixed schedule.
                  This can be especially useful for learners who have busy
                  schedules or who prefer to learn at their own speed.
                </p>
              </div>
            </div>
            <div className="w-6/12  mt-10 mb-5 flex flex-row items-start container mx-auto">
              <Image
                src="/images/intermediate/kourse/chat.png"
                alt={""}
                width={45}
                height={45}
              />

              <div className=" flex-col">
                <h2 className="ml-5 text-white font-semibold">
                  Instructor support
                </h2>
                <p className="ml-5 mt-3 text-gray-400 font-normal leading-relaxed md:w-3/4">
                  Providing learners with access to the instructor can be a
                  valuable feature, as it allows them to ask questions and get
                  feedback in real-time. This could be in the form of office
                  hours, live Q&A sessions, or one-on-one consultations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
