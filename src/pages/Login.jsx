import React from "react";
import { useState } from "react";
import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../context/Context";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();

  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "https://161.246.6.18:8880/api/Auth/login",
        {
          //บรรทัดนี้ไม่แน่ใจ
          username: userRef.current.value,
          password: passwordRef.current.value,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      // window.location.href = "/";
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data }); //login สำเร็จ
      console.log("ล็อกอินสำเร็จ");
    } catch (err) {
      setError(true);
      dispatch({ type: "LOGIN_FAILURE" }); //login ไม่สำเร็จ
      console.log("ล็อคอินไม่สำเร็จ");
    }
  };

  return (
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div class="max-w-md w-full space-y-8 ">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSCHsWfqESsCfx73Hpp9TiDFICc2wj.jpg"
            alt="Workflow"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Or
            <a
              href="/register"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              If you don't have account{" "}
            </a>
          </p>
        </div>
        <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="username" class="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autocomplete="text"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                ref={userRef}
              />
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                {" "}
                Remember me{" "}
              </label>
            </div>

            <div class="text-sm">
              <a
                href="/forgot"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {" "}
                Forgot your password?{" "}
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isFetching}
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
            {error && (
              <span style={{ color: "red", marginTop: "10px" }}>
                Incorrect username or password
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
