import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import LeftBlock from "../components/leftBlock/LeftBlock";
import MainScreen from "../components/mainScreen/MainScreen";
import Welcome from "../components/welcome/Welcome";
import Video from "../components/video/Video";
import Verses from "../components/isShowVerse/Verses";
import logo from "./logo.jpg";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Мой Устимов</title>
                <meta
                    name="description"
                    content="Крепость независимости поэта"
                />
                <meta
                    content={"https://ustinnov.ru" + logo}
                    property="og:image"
                />
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
        </div>
    );
}
