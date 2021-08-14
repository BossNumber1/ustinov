import React from "react";
import firstIll from "../../pages/illustrations/1.jpg";
import hidePostIcon from "../../pages/hidePost.png";
import AlbumPicture from "./AlbumPicture";

function IsShowVerse() {
    let verseStore = [
        {
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
        },
        { content: `Ух!` },
    ];

    const [isShowVerse, setShowVerse] = React.useState(false);

    const showPost = () => {
        document.body.style.background = "gray";
        setShowVerse(true);
    };

    const hidePost = () => {
        document.body.style.background = "white";
        setShowVerse(false);
    };

    return (
        <>
            {isShowVerse ? (
                <>
                    <div className="postVerse">
                        <button
                            onClick={hidePost}
                            className="btnHidePost"
                            data-title="Скрыть стих"
                        >
                            <img src={hidePostIcon} alt="hide post icon" />
                        </button>

                        <div className="labelVerse">Ах!</div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: verseStore[0].content,
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
                <AlbumPicture showPost={showPost} firstIll={firstIll} />
            )}
        </>
    );
}

export default IsShowVerse;
