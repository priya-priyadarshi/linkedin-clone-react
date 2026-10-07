function Footer() {
  return (
    <footer className="w-full bg-[#111827] px-6 py-12 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-10 md:flex-row">

        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            CareerHub
          </h2>

          <p className="mt-3 max-w-sm leading-6 text-gray-400">
            A professional platform to discover opportunities
            and build your career.
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <h3 className="mb-3 font-bold text-white">
              Platform
            </h3>

            <p className="mb-2 text-gray-400">Find Jobs</p>
            <p className="mb-2 text-gray-400">Explore</p>
            <p className="text-gray-400">Professionals</p>
          </div>

          <div>
            <h3 className="mb-3 font-bold text-white">
              Company
            </h3>

            <p className="mb-2 text-gray-400">About</p>
            <p className="mb-2 text-gray-400">Contact</p>
            <p className="text-gray-400">Privacy</p>
          </div>
        </div>

      </div>

      <div className="mx-auto mt-10 w-full max-w-7xl border-t border-gray-700 pt-6 text-sm text-gray-500">
        © 2026 CareerHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;