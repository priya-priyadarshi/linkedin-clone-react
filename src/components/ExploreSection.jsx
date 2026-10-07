function ExploreSection() {
  const categories = [
    "Technology",
    "Engineering",
    "Design",
    "Marketing",
    "Data Science",
    "Finance",
  ];

  return (
    <section id="explore" className="w-full bg-white px-6 py-20">
      <div className="mx-auto w-full max-w-7xl">

        <h2 className="text-4xl font-bold text-gray-900">
          Explore opportunities
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Discover professional paths based on your interests and skills.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-xl border border-gray-200 bg-white p-6 text-left text-xl font-bold shadow-sm transition hover:-translate-y-1 hover:border-[#0a66c2] hover:shadow-lg"
            >
              {category}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ExploreSection;