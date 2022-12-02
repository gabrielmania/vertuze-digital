import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

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
      {router.pathname !== "/" && <Navbar />}
      <Component {...pageProps} />
      {router.pathname !== "/" && <Footer />}
    </>
  );
}

export default MyApp;
