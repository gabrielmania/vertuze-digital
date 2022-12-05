import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useUser } from "../lib/hooks";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const user = useUser();
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <Head>
        <title>Vertuze Digital</title>
        <meta
          name="description"
          content="We bring you the latest in digital goods and services. All of it is available at your fingertips!"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {pageLoading ? (
        <div className="h-screen flex flex-col justify-center items-center">
          <Image
            src="/logos/light-nobg.png"
            className="animate-bounce w-3/12"
            alt="Vertuze Digital Logo"
            width={500}
            height={500}
          />
          <h5 className="text-2xl font-bold mt-5">
            Loading content. Please wait...
          </h5>
        </div>
      ) : (
        <>
          {router.pathname !== "/" && <Navbar user={user} />}
          <Component {...pageProps} user={user} />
          {router.pathname !== "/" && <Footer />}
        </>
      )}
    </>
  );
}

export default MyApp;
