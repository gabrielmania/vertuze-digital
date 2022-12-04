import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Head from "next/head";
import { useUser } from "../lib/hooks";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const user = useUser();

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
      {router.pathname !== "/" && <Navbar user={user} />}
      <Component {...pageProps} user={user} />
      {router.pathname !== "/" && <Footer />}
    </>
  );
}

export default MyApp;
