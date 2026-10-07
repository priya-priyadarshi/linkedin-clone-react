import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-3xl font-bold text-[#0a66c2]"
        >
          CareerHub
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="#explore"
            className="hidden px-3 py-2 font-medium text-gray-700 hover:text-[#0a66c2] md:block"
          >
            Explore
          </a>

          <a
            href="#jobs"
            className="hidden px-3 py-2 font-medium text-gray-700 hover:text-[#0a66c2] md:block"
          >
            Find Jobs
          </a>

          <Link
            to="/login"
            className="rounded-full px-4 py-2 font-semibold text-[#0a66c2] hover:bg-blue-50"
          >
            Sign in
          </Link>

          <Link
            to="/signup"
            className="rounded-full bg-[#0a66c2] px-5 py-2 font-semibold text-white hover:bg-[#004182]"
          >
            Join now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;