import React from "react";
import Head from "next/head";
import firstIll from "./illustrations/1.jpg";
// import bgim from "./bgim.jpg";
import hidePostIcon from "./hidePost.png";

// import dmh from "./dmh.mp4";

import styles from "../styles/Home.module.css";

import LeftBlock from "../components/leftBlock/LeftBlock";
import MainScreen from "../components/mainScreen/MainScreen";
import Welcome from "../components/welcome/Welcome";
import Video from "../components/video/Video";
import Footer from "../components/footer/Footer";

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
                                <div>
                                    <div>
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
                                                    src={firstIll}
                                                    alt="album picture"
                                                    style={{
                                                        filter: "blur(4px)",
                                                    }}
                                                />
                                                <div className="titleOnPage">
                                                    Ах
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <Video />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
