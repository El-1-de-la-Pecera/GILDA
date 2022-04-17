import Head from "next/head";
import "../styles/globals.css";

import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <title>Gilda</title>
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  );
}
