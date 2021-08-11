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
import eight from "./about/8.jpg";

import signa from "./about/signa.jpg";

import firstIll from "./illustrations/1.jpg";
import bgim from "./bgim.jpg";
import hidePostIcon from "./hidePost.png";

import styles from "../styles/Home.module.css";

export default function Home() {
    const [isShowVerse, setShowVerse] = React.useState(false);

    let verseStore = {
        content: `Ах! Сколько в этом взгляде красоты
                                        <br />и нежности, дарованной богами!
                                        <br />
                                        Да, каждый раз при встрече только ты
                                        <br />
                                        мне улыбнёшься милыми глазами. <br />
                                        Они уже о многом рассказали. <br />
                                        Твой смех меня спасает в трудный миг.
                                        <br />
                                        Прекраснее всех трелей соловьиных,
                                        <br />
                                        он рай в моей груди, как храм, воздвиг -
                                        <br />
                                        масштабнее да ярче, чем Афины. <br />
                                        <br />В час горя, как обычно, прибегу
                                        <br />
                                        в покои, оживлённые цветами - <br />в
                                        твой дом из счастья, неги - всю пургу,
                                        <br />
                                        всю вьюгу из души смахнуть словами.
                                        <br />
                                        Там ангелы кружатся рядом с нами. <br />
                                        <br />Я помню голос добрый - он лишь
                                        твой,
                                        <br />
                                        единственный на свете, самый лучший!
                                        <br />А если вдаль уйдёшь, то за тобой
                                        <br />я ринусь хоть по морю, хоть по
                                        суше. <br />
                                        <br />
                                        Знай, если вдруг улыбка пропадёт, <br />
                                        набросятся все беды мирозданья; <br />
                                        тлен, грусть, обид жестокий хоровод
                                        <br />
                                        тебя поволокут; все испытанья <br />
                                        накинутся, как волки; то не дам я <br />
                                        <br />
                                        им зло тебе чинить, ведь навсегда <br />
                                        в долгу перед тобой, моя родная...
                                        <br />
                                        <br /> И, как бы не меняли нас года,
                                        <br />
                                        тебя ни на кого не променяю!`,
    };

    const showPost = () => {
        document.body.style.background = "gray";
        setShowVerse(true);
    };

    const hidePost = () => {
        document.body.style.background = "white";
        setShowVerse(false);
    };

    return (
        <div>
            <Head>
                <title>Мой Устимов</title>
                <meta name="description" content="Независимая страница поэта" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
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
                            alt="about_two"
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
                            alt="about_three"
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
                            alt="about_four"
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
                            alt="about_five"
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
                            alt="about_six"
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
                            alt="about_seven"
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
                <div className={styles.main}>
                    <div
                        style={{
                            marginTop: 280,
                        }}
                    >
                        <div
                            style={{
                                marginBottom: 23,
                                paddingBottom: 23,
                                borderBottom: "1px solid gray",
                            }}
                        >
                            <div className="mt-4" style={{ marginBottom: 10 }}>
                                Привет 🙂
                            </div>
                            <div
                                className="mt-4 mb-4"
                                style={{ marginBottom: 15 }}
                            >
                                Меня зовут Дмитрий Устинов. Пишу под псевдонимом
                                Мой Устимов
                            </div>
                            <div style={{ marginBottom: 15 }}>
                                <div>Я - поэт</div>
                                <div>
                                    Пишу стихи, создаю клипы и делаю многое
                                    другое
                                </div>
                            </div>

                            <div className="mt-4 mb-5">
                                <b>Welcome</b>
                            </div>
                        </div>
                        <div className="body_page">
                            <div className="leftBlock">
                                <div>
                                    <img
                                        src={signa}
                                        alt="signa"
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                            zIndex: 2,
                                        }}
                                    />
                                    <img
                                        src={eight}
                                        alt="about_eight"
                                        width="50px"
                                        height="50px"
                                        style={{
                                            // maxWidth: "100%",
                                            // height: "auto",
                                            // marginTop: 122,
                                            zIndex: -1,
                                            float: "left",
                                            // marginRight: 5,
                                            borderRadius: 50,
                                        }}
                                    />
                                </div>
                                <div
                                    style={{
                                        // position: "absolute",
                                        top: 130,
                                        left: 130,
                                    }}
                                >
                                    <p>Дмитрий Устинов</p>
                                    <p>26 лет (род. 9.6.95)</p>
                                    <p>
                                        Живёт в <br />
                                        Великом Новгороде
                                    </p>
                                    <p>
                                        Мечтает о многом. Например, переехать в
                                        другой город ☺
                                    </p>
                                </div>
                                <div className="twitIll">
                                    <img src={twit} alt="post in twitter" />
                                </div>
                            </div>
                            <div className="rightBlock">
                                <div
                                // style={{ display: "flex" }}
                                >
                                    <div
                                    // style={{
                                    //     // float: "left",
                                    //     // marginLeft: 100,

                                    // }}
                                    >
                                        {isShowVerse ? (
                                            <>
                                                <div
                                                    style={{
                                                        backgroundColor:
                                                            "white",
                                                        borderRadius: 15,
                                                        width: "60%",
                                                        marginLeft: "20%",
                                                        boxShadow:
                                                            "0 0 10px white",
                                                    }}
                                                >
                                                    <button
                                                        onClick={hidePost}
                                                        className="btnHidePost"
                                                        data-title="Скрыть стих"
                                                    >
                                                        <img
                                                            src={hidePostIcon}
                                                            alt="hide post icon"
                                                        />
                                                    </button>

                                                    <div
                                                        style={{
                                                            fontWeight: "bold",
                                                            marginBottom: 10,
                                                            paddingTop: 10,
                                                            marginTop: 10,
                                                        }}
                                                    >
                                                        Ах!
                                                    </div>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: verseStore.content,
                                                        }}
                                                    />
                                                    <div className="firstIll">
                                                        <img
                                                            src={firstIll}
                                                            alt="first_illustrations"
                                                            style={{
                                                                paddingBottom: 30,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <div
                                                className="verseCard"
                                                onClick={showPost}
                                            >
                                                <img
                                                    src={bgim}
                                                    alt="album picture"
                                                />
                                                <div
                                                    style={{
                                                        fontSize: "25",
                                                        marginTop: -64,
                                                        position: "absolute",
                                                        color: "white",
                                                        marginLeft: 30,
                                                    }}
                                                >
                                                    Ах
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
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
