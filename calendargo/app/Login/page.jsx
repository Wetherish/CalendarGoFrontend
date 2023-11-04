import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-300 to-purple-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full py-2 px-3 border rounded-lg focus:ring focus:ring-pink-200"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full py-2 px-3 border rounded-lg focus:ring focus:ring-pink-200"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-sky-300 text-white rounded-lg hover:bg-sky-500 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-sm mt-4">
          Dont have an account?{" "}
          <Link href="/" className="text-pink-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
