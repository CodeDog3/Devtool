import React from "react";

const Login = () => {
  return (
    <div
      id="login-container"
      className="bg-gradient-to-br from-purple-500 to-blue-300 w-[450px] flex justify-center shadow-md rounded-xl p-1"
    >
      <div
        id="login"
        className="bg-gray-800 m-auto h-full w-full rounded-md pb-4"
      >
        <h3 className="text-center text-white text-xl pt-5 pb-3">
          Sign in to Devtool
        </h3>

        <form className="flex justify-center">
          <div id="credentials" className="space-y-3 w-[65%]">
            <div className="relative">
              <input
                type="email"
                id='login-email'
                placeholder=" "
                className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm bg-gray-700 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-600 focus:outline-none focus:ring-0 peer"
              ></input>
              <label
                htmlFor="login-email"
                className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                id="login-password"
                placeholder=" "
                className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm bg-gray-700 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
              />
              <label
                htmlFor="login-password"
                className="absolute text-sm text-gray-400 duration-300 transform scale-75 -translate-y-4 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
              >
                Password
              </label>
            </div>
            <button
              type="submit"
              className="text-white block bg-blue-300 py-1 rounded-md w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
