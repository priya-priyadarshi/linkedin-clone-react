import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="w-full bg-[#f3f2f0]">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">

        <div>
          <p className="text-sm font-bold tracking-wide text-[#0a66c2]">
            BUILD YOUR PROFESSIONAL FUTURE
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
            Find your next
            <span className="block text-[#0a66c2]">
              opportunity.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Connect with professionals, discover opportunities,
            build your career and find work that matches your skills.
          </p>

          <Link
            to="/signup"
            className="mt-8 inline-block rounded-full bg-[#0a66c2] px-7 py-3 font-bold text-white hover:bg-[#004182]"
          >
            Join now
          </Link>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-xl">
            <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-300" />

            <div className="p-7">
              <h2 className="text-2xl font-bold text-gray-900">
                Your career starts here.
              </h2>

              <p className="mt-3 text-gray-600">
                Discover jobs, connect with people and grow professionally.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;