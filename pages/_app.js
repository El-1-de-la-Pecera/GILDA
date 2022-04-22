import Head from "next/head";
import "../styles/globals.css";
import React from "react";
import { SessionProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <title>Gilda</title>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
