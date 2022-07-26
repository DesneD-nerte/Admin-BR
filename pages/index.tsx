import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const App = dynamic(() => import("../Admin/App"), { ssr: false });

const Home: NextPage = () => {
    return (
        <App></App>
        //     <div className={styles.container}>
        //         <Head>
        //             <title>Create Next App</title>
        //             <meta name="description" content="Generated by create next app" />
        //             <link rel="icon" href="/favicon.ico" />
        //         </Head>

        //         <main className={styles.main}></main>

        //         {/* <footer className={styles.footer}>
        //   </footer> */}
        //     </div>
    );
};

export default Home;
