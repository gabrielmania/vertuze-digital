import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-full bg-home bg-center bg-no-repeat bg-cover absolute inset-0 -z-20 flex flex-col justify-center items-center px-5">
        <div className="h-screen w-full bg-black absolute -z-10 opacity-60" />
        <h1 className="font-bold text-white text-4xl sm:text-6xl mb-5 text-center">
          Welcome to Vertuze Digital!
        </h1>
        <p className="text-white sm:text-2xl mb-2 text-center">
          We bring you the latest in digital goods and services.
        </p>
        <p className="text-white sm:text-2xl text-center">
          All of it is available at your fingertips!
        </p>
        <p className="text-white sm:text-2xl mt-10 mb-3 text-center">
          Browse our collection of digital goods exclusive just for you!
        </p>
        <div className="flex flex-col items-center sm:block">
          <Link href="/movies" className="btn btn-warning border-primary bg-primary mb-2 sm:mr-2">
            Movies
          </Link>
          <Link href="/series" className="btn btn-warning border-primary bg-primary mb-2 sm:mr-2">
            TV Series
          </Link>
          <Link href="/games" className="btn btn-warning border-primary bg-primary mb-2 sm:mr-2">
            Video Games
          </Link>
          <Link href="/music" className="btn btn-warning border-primary bg-primary">
            Music
          </Link>
        </div>
      </div>
    </>
  );
}
