import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "@/components/layout";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Satria Yudhia Putra</title>
        <meta
          name="description"
          content="Curiculum Vitae Satria Yudhia Putra Frontend Developer"
        />
      </Head>

      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
