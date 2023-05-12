import { useState } from 'react';
import Modal from './Modal';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between max-w-8xl mx-auto">
        <h1 className="text-2xl font-bold">
          <img
            src="https://i.ibb.co/wRcnvx0/logo2.png"
            alt="Logo"
            className="h-8 mx-lg my-0 ml-2"
          />
        </h1>
        <div className="flex justify-center items-center">
          <nav className={`md:block ${isNavOpen ? 'block' : 'hidden'}`}>
            <a
              href="https://dit.rsu.ac.th/computer-science/"
              className="mx-3 hover:text-gray-100"
            >
              College
            </a>
            <a
              href="https://prompthero.com/"
              className="mx-3 hover:text-gray-100"
            >
              Tools
            </a>
            <a
              href="https://www.instagram.com/_prolipop_/"
              className="mx-3 hover:text-gray-100"
            >
              Contact
            </a>
          </nav>
          <Modal />
        </div>
        <button className="md:hidden" onClick={() => setIsNavOpen(!isNavOpen)}>
          <svg
            className="w-6 h-6 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
