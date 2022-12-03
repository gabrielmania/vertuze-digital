import { useRouter } from "next/router";
import { useState } from "react";
import FormInput from "../components/FormInput";

export default function Register() {
  const router = useRouter();

  const [errorMsg, setErrorMsg] = useState("");
  const [body, setBody] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (evt) => {
    setBody((body) => {
      return { ...body, [evt.target.name]: evt.target.value };
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (errorMsg) setErrorMsg("");

    if (body.password !== body.confirmPassword) {
      setErrorMsg(`The passwords don't match`);
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        router.push("/login");
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error("An unexpected error happened occurred:", error);
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-fit py-10">
      <form
        onSubmit={handleSubmit}
        className="border rounded-lg shadow-lg w-10/12 md:w-6/12 lg:w-4/12 2xl:w-3/12 flex flex-col items-center p-10"
      >
        <img src="/logos/light-nobg.png" className="w-56 mb-10" />
        <FormInput
          label="First Name"
          type="text"
          name="firstName"
          value={body.firstName}
          handleChange={handleChange}
        />
        <FormInput
          label="Last Name"
          type="text"
          name="lastName"
          value={body.lastName}
          handleChange={handleChange}
        />
        <FormInput
          label="Username"
          type="text"
          name="username"
          value={body.username}
          handleChange={handleChange}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={body.email}
          handleChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={body.password}
          handleChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={body.confirmPassword}
          handleChange={handleChange}
        />
        <button className="btn btn-warning bg-primary mt-5">Login</button>
        {errorMsg && <p className="error mt-5">{errorMsg}</p>}
      </form>
    </div>
  );
}
