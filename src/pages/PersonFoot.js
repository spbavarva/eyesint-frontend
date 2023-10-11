import React, { useState } from "react";
import Domain from "../Component/Domain.js";
// import Popup from "./Popup";
import "../Component/Web.css"; // Import your CSS file
import Phone from "../Component/Phonenum.js";
import Name from "../Component/Name.js";
import Pdf from "../Component/Pdf.js"

const PersonFoot = () => {
    const [ispopupOpenC, setIspopupOpenC] = useState(false);
    const [ispopupOpenP, setIspopupOpenP] = useState(false);
    const [ispopupOpenPd, setIspopupOpenPd] = useState(false);
    const [ispopupOpenD, setIspopupOpenD] = useState(false);


    const openPopupD = () => {
        setIspopupOpenD(true);
      };
      const closepopupD = () => {
        setIspopupOpenD(false);
      };
    
      const openPopupC = () => {
        setIspopupOpenC(true);
      };
      const closepopupC = () => {
        setIspopupOpenC(false);
      };
    
      const openPopupP = () => {
        setIspopupOpenP(true);
      };
      const closepopupP = () => {
        setIspopupOpenP(false);
      };
    
      const openPopupPd = () => {
        setIspopupOpenPd(true);
      };
      const closepopupPd = () => {
        setIspopupOpenPd(false);
      };
  return (
<>
  <div className="bg-white">
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Eye Sint</span>
            <img className="h-8 w-auto" src="image/main.jpeg" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="index.html"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </a>
          <a
            href="about.html"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About
          </a>
          <a
            href="blog.html"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Blog
          </a>
          <a
            href="contact.html"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      <div className="lg:hidden" role="dialog" aria-modal="true">
        {/* Background backdrop, show/hide based on slide-over state. */}
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Eye Sint</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="index.html"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Homne
                </a>
                <a
                  href="about.html"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="blog.html"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </a>
                <a
                  href="contact.html"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
  <br />
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          Explore the world of cyber
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Person Foot Printing
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          what you need to learn about the social media we provide you one of
          the best tool for that to you enjoy and gather the information form
          the social media platforms.
        </p>
      </div>
      <div className="flex flex-wrap">
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            Phone Number
          </h2>
          <p className="leading-relaxed text-base mb-4">
            what ever you want to know about your mobile number here you can
            find it
          </p>
          <button className="web-button" onClick={openPopupP}>
        Phone numbner
      </button>
      <Phone isOpen={ispopupOpenP} onRequestClose={closepopupP} />
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            Username
          </h2>
          <p className="leading-relaxed text-base mb-4">
            how many platform have same username as you have that's you can find
            with the help of our tool.
          </p>
          <button className="web-button" onClick={openPopupC}>
        Username recon
      </button>
      <Name isOpen={ispopupOpenC} onRequestClose={closepopupC} />
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            PDF Metadata
          </h2>
          <p className="leading-relaxed text-base mb-4">
            All the data realted to the PDF you can find using this tool so you
            can get data of pdf data.
          </p>
          <button className="web-button" onClick={openPopupPd}>
        PDF Metadata
      </button>
      <Pdf isOpen={ispopupOpenPd} onRequestClose={closepopupPd} />
        </div>
        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            Domain search
          </h2>
          <p className="leading-relaxed text-base mb-4">
            want to find the who is look up so use this tool so that you can
            also find that details
          </p>
          <button className="web-button" onClick={openPopupD}>
        Domain Search
      </button>
      <Domain isOpen={ispopupOpenD} onRequestClose={closepopupD} />
        </div>
      </div>
      <button
        href="index.html"
        className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Home
      </button>
    </div>
  </section>
  <footer className="text-gray-600 body-font ">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col ">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 ">
        <svg
          xmlns="http://www.w3.org/2000/svg "
          fill="none "
          stroke="currentColor "
          strokeLinecap="round "
          strokeLinejoin="round "
          strokeWidth={2}
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full "
          viewBox="0 0 24 24 "
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5 " />
        </svg>
        <span className="ml-3 text-xl ">EyeSint Tool</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 ">
        © 2023 G5 —
        <a
          href="https://twitter.com/knyttneve "
          className="text-gray-600 ml-1 "
          rel="noopener noreferrer "
          target="_blank "
        >
          @Cyber Geeks
        </a>
      </p>
      
    </div>
  </footer>
</>


);
};

export default PersonFoot;