import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Holadok() {
  return (
    <>
      <Head>
        <title>Holadok</title>
      </Head>
      <header>
        <div>
          <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="container flex flex-wrap items-center justify-between mx-auto ">
              <a className="flex items-center w-3/12">
                <Image
                  src="/images/easy/holadok.png"
                  width={24}
                  height={24}
                  alt="Flowbite Logo"
                />

                <span className="ml-3 text-xl font-semibold whitespace-nowraptext-white">
                  Holadok
                </span>
              </a>
              <div className="flex md:order-2">
                <div>
                  <p className="hover:text-blue-500  focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">
                    Login
                  </p>
                </div>
                <button
                  type="button"
                  className="text-gray-800 border border-gray-800 hover:bg-blue-900 hover:text-white font-medium text-sm px-5 py-2 text-center mr-3 md:mr-0   "
                >
                  Book Now
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
                <ul className="flex flex-col p-4 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-12 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white  ">
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-gray-700 md:p-0 text-gray-700 hover:text-blue-500 "
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:text-gray-700  hover:text-white md:border-gray-700"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:text-gray-700  hover:text-white md:border-gray-700"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:text-gray-700  hover:text-white md:border-gray-700"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* content */}
      <section id="home" className="container mx-auto pt-36 flex">
        <div className="w-5/12">
          <h3 className="font-regular text-black text-5xl leading-relaxed">
            Get the healthcare you need, when you need it.
          </h3>
          <p className="text-lg text-slate-800 mt-10 leading-relaxed">
            Manage all of your healthcare needs in one convenient place from
            booking appointments to tracking your health history.
          </p>
          <button className="container bg-blue-900 md:py-4 md:px-9 mt-10 w-6/12 text-white">
            book an appointment
          </button>
        </div>
        <div className="w-3/12 h-48 shadow-2xl rounded-lg ml-5">
          <div className="mt-5 flex flex-wrap">
            <Image
              src="/favicon.ico"
              alt={""}
              width={30}
              height={30}
              className="ml-5"
            />
            <div className="ml-3 font-semibold">
              <p>John Doe</p>
            </div>
            <p className="font-normal text-sm ml-5 mt-3 mr-5 mb-3">
              The doctor appointment app has been great for me. Scheduling
              appointments and getting medication reminders is much easier, and
              I love the option for virtual consultations. I would recommend
              this app to others.
            </p>
          </div>
        </div>
        <div className="container w-4/12 ">
          <Image
            src="/images/easy/model.png"
            alt={""}
            width={530}
            height={794}
          />
        </div>
      </section>

      <div className="container mx-auto bg-[#203271] rounded-sm">
        <div className="md:flex w-full ">
          <div className="w-4/12 ml-10 mt-10 mb-5 flex flex-row items-start">
            <Image src="/images/easy/cal.png" alt={""} width={45} height={45} />

            <div className="flex-col">
              <h2 className="ml-5 text-white font-semibold">
                Online appointment scheduling
              </h2>
              <p className="ml-5 mt-3 text-gray-400 font-normal leading-relaxed md:w-3/4">
                Allows users to schedule appointments with their healthcare
                provider through the app.
              </p>
            </div>
          </div>
          <div className="w-4/12 ml-10 mt-10 mb-5 flex flex-row items-start">
            <Image
              src="/images/easy/notif.png"
              alt={""}
              width={45}
              height={45}
            />

            <div className=" flex-col">
              <h2 className="ml-5 text-white font-semibold">
                Medication reminders
              </h2>
              <p className="ml-5 mt-3 text-gray-400 font-normal leading-relaxed md:w-3/4">
                Allows users to schedule appointments with their healthcare
                provider through the app.
              </p>
            </div>
          </div>
          <div className="w-4/12 ml-10 mt-10 mb-5 flex flex-row items-start">
            <Image src="/images/easy/cam.png" alt={""} width={45} height={45} />

            <div className=" flex-col">
              <h2 className="ml-5 text-white font-semibold">
                Virtual consultations
              </h2>
              <p className="ml-5 mt-3 text-gray-400 font-normal leading-relaxed md:w-3/4">
                Allows users to schedule appointments with their healthcare
                provider through the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
