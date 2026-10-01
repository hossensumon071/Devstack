import { useState } from "react";
import Logo from "./Logo";

const Links = ["Home", "Technologies", "Projects", "About", "Contact"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-3 lg:px-8 lg:py-6 flex items-center justify-between">
        
        {/* Left: hamburger (mobile) / logo (desktop) */}
        <div className="flex items-center">
          <div className="relative lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 6l12 12M18 6L6 18"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                )}
              </svg>
            </button>

            {isMenuOpen && (
              <ul
                className="absolute left-0 top-full mt-3 w-52 bg-white rounded-xl border border-gray-100 shadow-lg p-2"
              >
                {Links.map((link, index) => (
                  <li key={link}>
                    <a 
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg hover:bg-gray-50 ${index === 0 ? "text-pink-600 font-medium" : "hover:text-pink-600"}`}
                    >{link}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="hidden lg:block">
          <Logo />
        </div>
        </div>

        {/* Center: Mobile Logo / Desktop Links */}
        <div className="lg:hidden">
            <Logo/>
        </div>
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
            {Links.map((link, index) => (
              <li key={link}>
                <a
                href={`#${link.toLowerCase()}`}
                className={index === 0 ? "text-pink-600" : "hover:text-pink-600 transition"}
                >
                  {link}
                </a>
              </li>
            ))}
        </ul>

        {/* Right: auth buttons  */}
        <div className="flex items-center gap-3 lg:gap-5">
            <a 
            href="/"
            className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">Sign In</a>
            <a
            href="/" 
            className="bg-pink-600 text-white text-xs sm:text-sm font-medium px-4 py-2 lg:px-5 lg:py-2.5 rounded-full hover:bg-pink-700 transition whitespace-nowrap">Sign up</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
