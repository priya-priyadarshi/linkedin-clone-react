function FindJobSection() {
  return (
    <section id="jobs" className="w-full bg-[#f3f2f0] px-6 py-20">
      <div className="mx-auto w-full max-w-7xl">

        <h2 className="text-4xl font-bold text-gray-900">
          Find the right job for you
        </h2>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Search for opportunities that match your skills,
          experience and career goals.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <input
            type="text"
            placeholder="Job title or skill"
            className="w-full rounded-lg border border-gray-300 bg-white px-5 py-4 outline-none focus:border-[#0a66c2]"
          />

          <input
            type="text"
            placeholder="Location"
            className="w-full rounded-lg border border-gray-300 bg-white px-5 py-4 outline-none focus:border-[#0a66c2]"
          />

          <button className="w-full rounded-lg bg-[#0a66c2] px-6 py-4 font-bold text-white hover:bg-[#004182]">
            Search jobs
          </button>
        </div>

      </div>
    </section>
  );
}

export default FindJobSection;