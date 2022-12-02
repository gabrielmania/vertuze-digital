import React from "react";
import FormInput from "../components/FormInput";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="border rounded-lg shadow-lg w-10/12 md:w-6/12 lg:w-4/12 2xl:w-3/12 flex flex-col items-center p-10">
        <img src="/images/logos/light-nobg.png" className="w-56 mb-10" />
        <FormInput label="Username" type="text" name="username" />
        <FormInput label="Password" type="password" name="password" />
        <button className="btn btn-warning bg-primary mt-5">Login</button>
      </form>
    </div>
  );
}
