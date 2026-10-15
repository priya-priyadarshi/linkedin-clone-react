import React from "react";

const Profile = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React.js",
    "Tailwind CSS", "Git & GitHub", "UI/UX Design"
  ];

  const projects = [
    {
      name: "Diabetes Prediction System",
      description: "A machine learning project to predict diabetes using health data.",
      tech: "Python, Flask, Machine Learning"
    },
    {
      name: "LinkedIn Clone",
      description: "A professional networking platform UI built with React.",
      tech: "React.js, CSS, JavaScript"
    },
    {
      name: "AI Interview Platform",
      description: "An AI-powered platform for interview practice and evaluation.",
      tech: "React.js, JavaScript, API"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">in</h1>
        <span className="text-gray-600">My Profile</span>
      </nav>

      <main className="max-w-4xl mx-auto p-4 space-y-4">
        <section className="bg-white rounded-xl shadow overflow-hidden">
          <div className="h-36 bg-gradient-to-r from-blue-700 to-sky-400"></div>
          <div className="p-6">
            <div className="w-24 h-24 rounded-full bg-blue-100 border-4 border-white -mt-16 flex items-center justify-center text-3xl font-bold text-blue-700">
              P
            </div>
            <h2 className="text-2xl font-bold mt-3">Priya Priyadarshi</h2>
            <p className="text-gray-600 mt-1">
              Frontend Developer | React.js | JavaScript | UI/UX
            </p>
            <p className="text-sm text-gray-500 mt-2">
              B.Tech CSE Student · India
            </p>
            <a
              href="https://github.com/priya-priyadarshi"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800"
            >
              View GitHub
            </a>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-3">About</h2>
          <p className="text-gray-600 leading-7">
            I am a Computer Science student interested in frontend development
            and building clean, responsive web applications. I work with
            React.js, JavaScript, HTML, CSS and Tailwind CSS. I enjoy learning
            new technologies and turning ideas into user-friendly interfaces.
          </p>
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">Projects</h2>
          <div className="space-y-5">
            {projects.map((project) => (
              <div key={project.name} className="border-b pb-4 last:border-0">
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <p className="text-gray-600 my-2">{project.description}</p>
                <p className="text-sm text-blue-700">{project.tech}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-3">Education</h2>
          <h3 className="font-semibold">B.Tech in Computer Science</h3>
          <p className="text-gray-600">
            Prestige Institute of Management and Research, Bhopal
          </p>
        </section>

        <footer className="text-center text-sm text-gray-500 py-5">
          © 2026 Priya Priyadarshi · Built with React
        </footer>
      </main>
    </div>
  );
};

export default Profile;
