import React from "react";
import Head from "next/head";
import logotip from "./logotip.jpg";
import vk from "./vk.png";
import insta from "./insta.png";
import twt from "./twt.png";
import yt from "./yt.png";
import twit from "./twit.png";

import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Мой Устимов</title>
                <meta name="description" content="Независимая страница поэта" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div>
                    <img
                        src={logotip}
                        alt="logo"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>

                <div
                    style={{
                        marginTop: 40,
                    }}
                >
                    <div className="mt-4" style={{ marginBottom: 10 }}>
                        Привет 🙂
                    </div>
                    <div className="mt-4 mb-4" style={{ marginBottom: 15 }}>
                        Меня зовут Дмитрий Устинов. Пишу под псевдонимом Мой
                        Устимов
                    </div>
                    <div style={{ marginBottom: 15 }}>
                        <div>Я - поэт</div>
                        <div>
                            Пишу стихи, создаю клипы и делаю многое другое
                        </div>
                    </div>

                    <div className="mt-4 mb-5">
                        <b>Welcome</b>
                    </div>

                    <img src={twit} alt="post in twitter" />
                </div>
            </main>
            <footer style={{ marginLeft: 495, marginTop: 40 }}>
                {/* <div> */}
                <a href="https://vk.com/moy_ustimov" target="_blank">
                    <img src={vk} alt="vk_icon" style={{ marginRight: 32 }} />
                </a>

                <a href="https://twitter.com/moy_ustimov" target="_blank">
                    <img
                        src={twt}
                        alt="twitter_icon"
                        style={{ marginRight: 32 }}
                    />
                </a>
                <a href="https://www.instagram.com/moy_ustimov">
                    <img
                        src={insta}
                        alt="instagramm_icon"
                        style={{ marginRight: 32 }}
                    />
                </a>
                <a href="https://youtube.com/moy_ustimov" target="_blank">
                    <img
                        src={yt}
                        alt="youtube_icon"
                        style={{ marginRight: 32 }}
                    />
                </a>
                {/* </div> */}
            </footer>
        </div>
    );
}
