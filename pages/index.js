import Head from "next/head";
import Router from "next/router";
import classes from "./index.module.css"

export default function Home() {
  setTimeout(() => {
    Router.push("/auth");
  }, 3000);
  return (
    <>
      <Head>
        <title>Havit, Have it!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <img className={classes.letter} src="../letter.png" />
      </div>
    </>
  );
}