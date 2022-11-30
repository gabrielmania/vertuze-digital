import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="border rounded-lg shadow-lg w-10/12 md:w-6/12 lg:w-4/12 2xl:w-3/12 flex flex-col items-center p-10">
        <img src="" />
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            required
            className="input input-sm input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            required
            className="input input-sm input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-warning bg-primary mt-5">Login</button>
      </form>
    </div>
  );
}
