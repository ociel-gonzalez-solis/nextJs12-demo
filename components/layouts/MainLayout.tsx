import Head from "next/head";
import { NavBar } from "../NavBar";
import styles from "./MainLayout.module.css";

import { FC } from "react";

type Props = {
  children: React.ReactNode;
};


export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
      </div>

      <main className={styles.main}>{children}</main>
    </div>
  );
};