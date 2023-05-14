import { Html, Head, Main, NextScript } from 'next/document'
import * as React from "react";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@300;400;700&display=swap"
                rel="stylesheet"
            />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}
