import React from 'react';
import main from "../pages/image/main.jpeg";
import about from "../pages/image/about.png";
import sneh from "../pages/image/sneh.jpeg";
import kapu from "../pages/image/kapu.jpeg";
import smit from "../pages/image/1661447281400.jpeg";
import sir from "../pages/image/sir.jpeg";

import { Link } from "react-router-dom";



const About = () =>{
  return (
    <>
  <div className="bg-white">
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="" className="-m-1.5 p-1.5">
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
            href="/"
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
  </div>
  <br />
  <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
    <div className="flex flex-col lg:flex-row justify-between gap-8">
      <div className="w-full lg:w-5/12 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">
          About Project
        </h1>
        <p className="font-normal text-base leading-6 text-gray-600 ">
          It is a tool in which cyber security geeks like us come and explore
          the thing which they want to do. Many student and even professional
          want to know more about their website , system and their social media.
          Today every person want to know about their social media names, every
          professional wanted to know about their website , every person wants
          to know about their system ports. we gives all the services on the
          same platform so enjoy the tool.
        </p>
      </div>
      <div className="w-full lg:w-8/12">
        <img
          className="w-full h-full"
          src={about}
          alt="A group of People"
        />
      </div>
    </div>
    <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
      <div className="w-full lg:w-5/12 flex flex-col justify-center">
        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">
          Project Journey
        </h1>
        <p className="font-normal text-base leading-6 text-gray-600 ">
          At first this is an basic idea in which we want to make the tool based
          on the cyber security but we have only roadmap we didn't have idea how
          to implement that, so we met priyank sir they advised us on various
          topic and tell to make UI so that user can easily use that and we can
          reach to more people and tool will be very useful so we work based on
          their advise and the tool is finally ready
        </p>
      </div>
      <div className="w-full lg:w-8/12 lg:pt-8">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
          <div className="p-4 pb-6 flex justify-center flex-col items-center">
            <img
              className="md:block hidden"
              src={sneh}
              alt="Alexa featured Image"
            />
            <img
              className="md:hidden block"
              src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
              alt="Alexa featured Image"
            />
            <p className="font-medium text-xl leading-5 text-gray-800  mt-4">
              Sneh
            </p>
          </div>
          <div className="p-4 pb-6 flex justify-center flex-col items-center">
            <img
              className="md:block hidden"
              src={kapu}
              alt="Olivia featured Image"
            />
            <img
              className="md:hidden block"
              src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
              alt="Olivia featured Image"
            />
            <p className="font-medium text-xl leading-5 text-gray-800  mt-4">
              Kalpesh
            </p>
          </div>
          <div className="p-4 pb-6 flex justify-center flex-col items-center">
            <img
              className="md:block hidden"
              src={smit}
              alt="Liam featued Image "
            />
            <img
              className="md:hidden block"
              src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
              alt="Liam featued Image "
            />
            <p className="font-medium text-xl leading-5 text-gray-800  mt-4">
              Smit
            </p>
          </div>
          <div className="p-4 pb-6 flex justify-center flex-col items-center">
            <img
              className="md:block hidden"
              src={sir}
              alt="Elijah featured image "
            />
            <img
              className="md:hidden block"
              src="https://i.ibb.co/ThZBWxH/Rectangle-121.png "
              alt="Elijah featured image "
            />
            <p className="font-medium text-xl leading-5 text-gray-800  mt-4">
              Priyank Sir
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg "
          fill="none "
          stroke="currentColor "
          strokeLinecap="round "
          strokeLinejoin="round "
          strokeWidth={2}
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24 "
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5 " />
        </svg>
        <span className="ml-3 text-xl">EyeSint Tool</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2023 G5 —
        <a
          href="https://twitter.com/knyttneve "
          className="text-gray-600 ml-1"
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
}

export default About;
