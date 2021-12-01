import React from "react";
import Link from "next/link";
// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-start justify-between">
          <div className="w-full relative flex justify-between pt-1 lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 mt-3 whitespace-nowrap uppercase"
                href="/" className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block align-middle mr-4 py-2 whitespace-nowrap uppercase"
              >
                <img className="inline-block align-middle float-left w-6" src="img/brand/CowLogo.png" />
                <span className="inline-block align-middle float-left">AggieShell</span>
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto mb-0">
              <li className="flex items-center">
                <a className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="/#introduction">
                  <span>Introduction</span>
                </a>
              </li>
              <li className="flex items-center">
                <a className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="/#deliverables">
                  <span>Deliverables</span>
                </a>
              </li>
              <li className="flex items-center">
                <a className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="/#implementation">
                  <span>Implementation</span>
                </a>
              </li>
              <li className="flex items-center">
                <a className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="/#future">
                  <span>Future Works</span>
                </a>
              </li>
              <li className="flex items-center">
                <a className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="/timeline">
                  <span>Timeline</span>
                </a>
              </li>
              <li className="flex items-center">
                <a className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="/#about">
                  <span>About us</span>
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto mb-0">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/deliverables"
                >
                  <i className="text-blueGray-400 fas fa-question-circle text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Help</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/Cecil-Zhang/AggieShell/"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-github text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>
              <Link href="/main/mainApp">
              <li className="flex items-center">
                <button
                  className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-rocket"></i> Launch Demo App
                </button>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
