import "styles/global.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { Container, MantineProvider } from "@mantine/core";
import Header from "components/Header";
import "@fontsource/lexend-deca";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const links = [
    { link: "/about", label: "About" },
    { link: "/leetcode", label: "LeetCode" },
    { link: "/deconstructx", label: "Deconstruct X" },
  ];

  return (
    <>
      <Head>
        <title>Duc Tran</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Header links={links} />
        <Container>
          <Component {...pageProps} />
        </Container>
      </MantineProvider>
    </>
  );
}
