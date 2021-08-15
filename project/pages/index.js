import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import LeftBlock from "../components/leftBlock/LeftBlock";
import MainScreen from "../components/mainScreen/MainScreen";
import Welcome from "../components/welcome/Welcome";
import Video from "../components/video/Video";
import Footer from "../components/footer/Footer";
import Verses from "../components/isShowVerse/Verses";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Мой Устимов</title>
                <meta name="description" content="Независимая страница поэта" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <MainScreen />
                <div className={styles.main}>
                    <div
                        style={{
                            marginTop: 280,
                        }}
                    >
                        <Welcome />
                        <div className="body_page">
                            <div className="leftBlock">
                                <LeftBlock />
                            </div>
                            <div className="rightBlock">
                                <Verses />
                                <Video />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
