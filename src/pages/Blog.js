import React from 'react';
import main from "../pages/image/main.jpeg";
import about from "../pages/image/about.png";
import sneh from "../pages/image/sneh.jpeg";
import kapu from "../pages/image/kapu.jpeg";
import smit from "../pages/image/1661447281400.jpeg";
import sir from "../pages/image/sir.jpeg";
import blog1 from "../pages/image/blog1.jpeg";
import hacker from "../pages/image/hacker.jpeg";
import blog3 from "../pages/image/blog3.jpeg";

import { Link } from "react-router-dom";



const About = () =>{
  return (
    <div className="bg-white">
  <header className="absolute inset-x-0 top-0 z-50">
    <nav
      className="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Eye Sint</span>
          <img className="h-8 w-auto" src={main} alt="" />
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
          href=""
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Home
        </a>
        <a
          href="about"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          About
        </a>
        <a
          href="blog"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Blog
        </a>
        <a
          href="contact"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          
        </a>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
         
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
                href="/"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Home
              </a>
              <a
                href="about"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                About
              </a>
              <a
                href="blog"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Blog
              </a>
              <a
                href="contact"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
               
              </a>
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
               
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-24 h-full bg-indigo-500" />
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
            Know More....
          </h1>
          <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
            Cyber Security is red hot topic in the current time we need to know
            more about it for our data privacy and security....
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={blog1}
            />
          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            Data Security
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Protecting Your Digital Fortress: A Comprehensive Guide to
            Cybersecurity; protection of the data is very inportant in the
            current time so that cyber security is very important
          </p>
          <Link to="/blog1">
                    <button className="home-button">
                      {" "}Go to web-scrapping
                    </button>
                  </Link>
          <a
            href="blog1"
            className="text-indigo-500 inline-flex items-center mt-3"
          >
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={hacker}
            />
          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            The Hacker
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Unveiling the Enigma: Understanding the World of Hackers; haclers
            are the worlds biggerst thread as they can impact the security of
            the person data.
          </p>
          <a
            href="blog2"
            className="text-indigo-500 inline-flex items-center mt-3"
          >
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={blog3}
            />
          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            The Cyber Security
          </h2>
          <p className="text-base leading-relaxed mt-2">
            The cyber security history and the evolution ; how the cyber
            security start and then how they can upgrade them self . main
            functions of that .....{" "}
          </p>
          <a
            href="blog3"
            className="text-indigo-500 inline-flex items-center mt-3"
          >
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
  <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="ml-3 text-xl">EyeSint Tool</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2023 G5 —
        <a
          href="https://twitter.com/knyttneve"
          className="text-gray-600 ml-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          @Cyber Geeks
        </a>
      </p>
      {/* <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a class="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span> */}
    </div>
  </footer>
</div>



  );
}

export default About;
