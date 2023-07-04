import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script async defer src="https://analytics.umami.is/script.js" data-website-id="9dd21b55-6c73-4a55-bea7-3526d8b465a1"></script>
        <script async defer src="https://analytics.umami.is/script.js" data-website-id="71195e08-c82b-4068-a7f9-733115c10b02"></script>
      </Head>
      <body className="font-inter">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
