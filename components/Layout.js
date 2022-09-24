import Head from "next/head";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Frontend mentor challenge</title>
      </Head>
      <Navigation />
      <main>{children}</main>
    </>
  );
}
