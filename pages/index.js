import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-full bg-home bg-center bg-no-repeat bg-cover absolute inset-0 -z-20 flex flex-col justify-center items-center">
        <div className="h-screen w-full bg-black absolute -z-10 opacity-60" />
        <h1 className="font-bold text-white text-6xl mb-5">
          Welcome to Vertuze Digital!
        </h1>
        <p className="text-white text-2xl mb-2">
          We bring you the latest in digital goods and services.
        </p>
        <p className="text-white text-2xl">
          All of it is available at your fingertips!
        </p>
        <p className="text-white text-2xl mt-10 mb-3">
          Browse our collection of digital goods exclusive just for you!
        </p>
        <div>
          <Link href="/movies" className="btn btn-warning bg-primary border-primary mr-3">
            Movies
          </Link>
          <Link href="/series" className="btn btn-warning bg-primary border-primary mr-3">
            TV Series
          </Link>
          <Link href="/games" className="btn btn-warning bg-primary border-primary mr-3">
            Video Games
          </Link>
          <Link href="/music" className="btn btn-warning bg-primary border-primary">
            Music
          </Link>
        </div>
      </div>
    </>
  );
}
