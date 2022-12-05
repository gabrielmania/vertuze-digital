import { useRouter } from "next/router";
import { useState } from "react";
import FormInput from "../components/FormInput";

export default function Login() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [body, setBody] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt) => {
    setBody((body) => {
      return { ...body, [evt.target.name]: evt.target.value };
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (errorMsg) setErrorMsg("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        router.push("/").then(() => router.reload());
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error("An unexpected error happened occurred:", error);
      setErrorMsg(error.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex flex-col justify-center items-center">
          <img src="/logos/light-nobg.png" className="animate-bounce w-3/12" />
          <h5 className="text-2xl font-bold mt-5">
            Logging in. Please wait...
          </h5>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <form
            onSubmit={handleSubmit}
            className="border rounded-lg shadow-lg w-10/12 md:w-6/12 lg:w-4/12 2xl:w-3/12 flex flex-col items-center p-10"
          >
            <img src="/logos/light-nobg.png" className="w-56 mb-10" />
            <FormInput
              label="Username"
              type="text"
              name="username"
              value={body.username}
              handleChange={handleChange}
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              value={body.password}
              handleChange={handleChange}
            />
            <button className="btn btn-warning bg-primary mt-5">Login</button>
            {errorMsg && <p className="error mt-5">{errorMsg}</p>}
          </form>
        </div>
      )}
    </>
  );
}
