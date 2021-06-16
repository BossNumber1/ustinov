import React from "react";
import Head from "next/head";
import logotip from "./logotip.jpg";
import entm from "./entm.png";
import vk from "./vk.png";
import insta from "./insta.png";
import twt from "./twt.png";
import yt from "./yt.png";
import twit from "./twit.png";

import one from "./about/1.jpg";
import two from "./about/2.jpg";
import three from "./about/3.jpg";
import four from "./about/4.jpg";
import five from "./about/5.jpg";
import six from "./about/6.jpg";
import seven from "./about/7.jpg";

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
                <div style={{ position: "relative" }}>
                    <div>
                        {/* style={{ position: "absolute" }}> */}{" "}
                        <img
                            src={logotip}
                            alt="logo1"
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                                zIndex: 2,
                            }}
                        />
                    </div>
                    <div style={{ marginTop: 8 }}>
                        {/* <img
                            src={entm}
                            alt="logo2"
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                                marginTop: 122,
                                zIndex: -1,
                            }}
                        /> */}
                        <img
                            src={one}
                            alt="about_one"
                            style={{
                                // maxWidth: "100%",
                                // height: "auto",
                                // marginTop: 122,
                                zIndex: -1,
                                float: "left",
                                marginRight: 5,
                            }}
                        />
                        <img
                            src={two}
                            alt="about_one"
                            style={{
                                // maxWidth: "100%",
                                // height: "auto",
                                // marginTop: 122,
                                zIndex: -1,
                                float: "left",
                                marginRight: 5,
                            }}
                        />
                        <img
                            src={three}
                            alt="about_one"
                            style={{
                                // maxWidth: "100%",
                                // height: "auto",
                                // marginTop: 122,
                                zIndex: -1,
                                float: "left",
                                marginRight: 5,
                            }}
                        />
                        <img
                            src={four}
                            alt="about_one"
                            style={{
                                // maxWidth: "100%",
                                // height: "auto",
                                // marginTop: 122,
                                zIndex: -1,
                                float: "left",
                                marginRight: 5,
                            }}
                        />
                        <img
                            src={five}
                            alt="about_one"
                            style={{
                                // maxWidth: "100%",
                                // height: "auto",
                                // marginTop: 122,
                                zIndex: -1,
                                float: "left",
                                marginRight: 5,
                            }}
                        />
                        <img
                            src={six}
                            alt="about_one"
                            style={{
                                // maxWidth: "100%",
                                // height: "auto",
                                // marginTop: 122,
                                zIndex: -1,
                                float: "left",
                                marginRight: 5,
                            }}
                        />
                        <img
                            src={seven}
                            alt="about_one"
                            style={{
                                // maxWidth: "100%",
                                // height: "auto",
                                // marginTop: 122,
                                zIndex: -1,
                                float: "left",
                                // marginRight: 5,
                            }}
                        />
                    </div>
                </div>

                <div
                    style={{
                        marginTop: 280,
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

                    <div>
                        Последний и важный стих
                        <br />
                        Ах! Сколько в этом взгляде красоты и нежности,
                        дарованной богами! Да, каждый раз при встрече только ты
                        мне улыбнёшься милыми глазами. Они уже о многом
                        рассказали. Твой смех меня спасает в трудный миг.
                        Прекраснее всех трелей соловьиных, он рай в моей груди,
                        как храм, воздвиг - масштабнее да ярче, чем Афины. В час
                        горя, как обычно, прибегу в покои, оживлённые цветами -
                        в твой дом из счастья, неги - всю пургу, всю вьюгу из
                        души смахнуть словами. Там ангелы кружатся рядом с нами.
                        Я помню голос добрый - он лишь твой, единственный на
                        свете, самый лучший! А если вдаль уйдёшь, то за тобой я
                        ринусь хоть по морю, хоть по суше. Знай, если вдруг
                        улыбка пропадёт, набросятся все беды мирозданья; тлен,
                        грусть, обид жестокий хоровод тебя поволокут; все
                        испытанья накинутся, как волки; то не дам я им зло тебе
                        чинить, ведь навсегда в долгу перед тобой, моя родная...
                        И, как бы не меняли нас года, тебя ни на кого не
                        променяю!
                    </div>
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
