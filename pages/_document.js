import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <Script src="https://kit.fontawesome.com/ed2f2fe40a.js"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
