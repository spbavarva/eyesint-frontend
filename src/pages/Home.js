import React from "react";
import logo from "../pages/image/logo.webp";
import main from "../pages/image/main.jpeg";
import banner from "../pages/image/banner.png";
import college from "../pages/image/college.webp";
import sir from "../pages/image/sir.jpeg";
import sneh from "../pages/image/sneh.jpeg";
import kapu from "../pages/image/kapu.jpeg";
import smit from "../pages/image/1661447281400.jpeg";
import { Link } from "react-router-dom";
import { Link as ScrollLink, Element, animateScroll as scroll } from "react-scroll";
// import "../pages/Home.cs"



const Home = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true });
  };


  return (
    <div>
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
                href="index.html"
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
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
               
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
                      Home
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
                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />Know
                  more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Learn Cyber Security
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                are you cyber geek ? want to learn more about some aspects of
                website , port and social media , here what you want....
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
              <ScrollLink to="top" spy={true} smooth={true} offset={-40} duration={500}>
                <a
                  href="" onClick={scrollToTop}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Go to TOOL
                </a>
                <a
                  href="/Webcrawl"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {" "}<span aria-hidden="true" />
                </a>
                </ScrollLink>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="md:w-1/2">
          <p className="font-bold text-sm uppercase">Services</p>
          <p className="text-3xl font-bold">Multimedia products</p>
          <p className="text-2xl mb-10 leading-none">
            Atractive designs for your brand
          </p>
          <a
            href="#"
            className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
          >
            Contact us
          </a>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={logo}
            />
          </div>
          <Element name="top" className="element" />
          <div id="Tool" className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Web Scrawling
                </h2>
                <p className="leading-relaxed text-base">
                  want to learn more of the website click here and get the data
                  . many data of the website you need to learn for your
                  knowledge.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  <Link to="/Webcrawl">
                    <button className="home-button">
                      {" "}Go to web-scrapping
                    </button>
                  </Link>
                </a>
                {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Go to web-scrapping
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a> */}
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Port Scanning
                </h2>
                <p className="leading-relaxed text-base">
                  in your system which port is open do you know? if you want to
                  know click here for the check...
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                
                  <Link to="/Portscan">
                    <button className="home-button">
                      {" "}Go to Port Scanning
                    </button>
                  </Link>
                </a>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Human Foot Printing
                </h2>
                <p className="leading-relaxed text-base">
                  many data related to you wants to know ? you can check some
                  personal data on social media of you click on it...
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  <Link to="/PersonFoot">
                    <button className="home-button">
                      {" "}Go to Person footprinting
                    </button>
                  </Link>
                </a>
                {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={college}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={sir}
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Prof. Priyank Bhojak
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                  <p className="text-base">
                    Project Guide who teach us everytime when we need his help
                    and guidence.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  This our Project of semester 7. Our main topic is Cyber
                  Security. we need to make one tool who give feasibility to the
                  every user who want to learn about the different aspects of
                  the various thing like website, port and their own data. in
                  this world if you want to learn where is your user name you
                  can find, you want to know data of the website you can get,
                  etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={sneh}
                />
                <p className="leading-relaxed">
                  Cyber Security expert who work in this field since 2 years and
                  want to pursue masters in this domain in USA. make the
                  majority backend part of the tool and desingn the tool so that
                  it will become user frindly
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Sneh Bavarva
                </h2>
                <p className="text-gray-500">Backend Developer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={kapu}
                />
                <p className="leading-relaxed">
                  Main man who joint UI and backend , also cyber security geek
                  who will pursue his master in this field from CANADA. make the
                  components of project and joint them. so tool is user friendly
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Kalpesh Senva
                </h2>
                <p className="text-gray-500">Backend & UI Develeoper</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={smit}
                />
                <p className="leading-relaxed">
                  Man who make the road map of the project and make all the
                  documentation of the project including SRS and make the UI
                  user frinedly. Man behind UI and documentation of the tool.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Smit Bhimani
                </h2>
                <p className="text-gray-500">UI Developer & Documentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/mark-indigo-600.svg"
              alt="logo"
            />
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Eye Sint —
            <a
              href="#"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              AI Cyber Tech
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="#" className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 18.25 2 14.58 2 10.77c0-4.42 3.58-8 8-8s8 3.58 8 8c0 3.81-3.4 7.48-6.55 9.26z" />
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <line x1="12" y1="6" x2="12" y2="18" />
                <line x1="12" y1="6" x2="12" y2="18" />
                <line x1="12" y1="6" x2="12" y2="18" />
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <line x1="12" y1="6" x2="12" y2="18" />
                <line x1="12" y1="6" x2="12" y2="18" />
                <line x1="12" y1="6" x2="12" y2="18" />
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="6" cy="6" r="2" />
                <circle cx="6" cy="12" r="2" />
                <circle cx="6" cy="18" r="2" />
                <line x1="20" y1="4" x2="20" y2="20" />
                <line x1="14" y1="4" x2="14" y2="20" />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;

