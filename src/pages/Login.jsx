import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f3f2f0] px-4 py-10">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <Link
          to="/"
          className="text-3xl font-bold text-[#0a66c2]"
        >
          CareerHub
        </Link>

        <h1 className="mt-8 text-3xl font-bold text-gray-900">
          Welcome back
        </h1>

        <p className="mt-2 text-gray-600">
          Sign in to continue to CareerHub.
        </p>

        <form className="mt-8 space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#0a66c2]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#0a66c2]"
          />

          <button
            type="button"
            className="w-full rounded-full bg-[#0a66c2] py-3 font-bold text-white hover:bg-[#004182]"
          >
            Sign in
          </button>

        </form>

        <p className="mt-8 text-center text-gray-600">
          New to CareerHub?{" "}
          <Link
            to="/signup"
            className="font-bold text-[#0a66c2]"
          >
            Join now
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;