import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export function NavBars() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Profile image section */}
          <div className="flex items-center -ml-16">
            <img
              src="/images/CSLogo1.png"
              alt="Ordaz Cloud Solutions"
              className="h-28 w-28 object-contain rounded-full"
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`transition-colors ${
                isActive('/') 
                  ? 'text-blue-400/75 font-semibold border-b-2 border-blue-300/75' 
                  : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-400'
              }`}
            >
              Home
            </Link>

            <Link 
              to="/projects" 
              className={`transition-colors ${
                isActive('/projects') 
                  ? 'text-blue-400/75 font-semibold border-b-2 border-blue-300/75' 
                  : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-400'
              }`}
            >
              Projects
            </Link>

            <Link 
              to="/resume" 
              className={`transition-colors ${
                isActive('/resume') 
                  ? 'text-blue-400/75 font-semibold border-b-2 border-blue-300/75' 
                  : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-400'
              }`}
            >
              Resume
            </Link>

            <Link 
              to="/aboutMe" 
              className={`transition-colors ${
                isActive('/aboutMe') 
                  ? 'text-blue-400/75 font-semibold border-b-2 border-blue-300/75' 
                  : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-400'
              }`}
            >
              About Me
            </Link>

            <Link 
              to="/contact" 
              className={`transition-colors ${
                isActive('/contact') 
                  ? 'text-blue-400/75 font-semibold border-b-2 border-blue-300/75' 
                  : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-400'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-blue-400/75 focus:outline-none focus:text-blue-400/75"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block transition-colors py-2 px-3 rounded-md ${
                  isActive('/') 
                    ? 'bg-blue-50 text-blue-400/75 font-semibold' 
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-400/75'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                className={`block transition-colors py-2 px-3 rounded-md ${
                  isActive('/projects') 
                    ? 'bg-blue-50 text-blue-400/75 font-semibold' 
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-400/75'
                }`}
              >
                Projects
              </Link>
              <Link 
                to="/resume" 
                className={`block transition-colors py-2 px-3 rounded-md ${
                  isActive('/resume') 
                    ? 'bg-blue-50 text-blue-400/75 font-semibold' 
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-400/75'
                }`}
              >
                Resume
              </Link>
              <Link 
                to="/aboutMe" 
                className={`block transition-colors py-2 px-3 rounded-md ${
                  isActive('/aboutMe') 
                    ? 'bg-blue-50 text-blue-400/75 font-semibold' 
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-400/75'
                }`}
              >
                About Me
              </Link>
              <Link 
                to="/contact" 
                className={`block transition-colors py-2 px-3 rounded-md ${
                  isActive('/contact') 
                    ? 'bg-blue-50 text-blue-400/75 font-semibold' 
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-400/75'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
