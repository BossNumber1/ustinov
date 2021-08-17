import React from "react";
import IsShowVerse from "./IsShowVerse";

function Verses() {
    let verseStore = [
        {
            id: "0",
            title: "Ах",
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
            illustration: "https://clck.ru/WrKCP",
        },
        {
            id: "1",
            title: "Помню",
            content: `Помню ветер голосистый,<br />
                        как смеялись мы:<br />
                        я и ты, мой милый sister,<br />
                        у грядущей тьмы.<br />
                        <br /><br />
                        Нам тогда - тепло и ярко<br />
                        в глубине души.<br />
                        Называл своим подарком,<br />
                        чувства не душил.<br />
                        <br /><br />
                        Грезил, что навечно будем<br />
                        юны и просты.<br />
                        Но ворвался без прелюдий<br />
                        возраст, где простыл<br />
                        <br /><br />
                        каждый маленький ребёнок,<br />
                        ставши чурбаном.<br />
                        Много дел - стена от тонок<br />
                        в ширь - стирает дом.<br />
                        <br /><br />
                        Легче, больше disconnectим,<br />
                        меньше тет-а-тет.<br />
                        И меняем снова сеттинг<br />
                        вместо встречиnet.<br />
                        <br /><br />
                        Но уверен, поправимо<br />
                        всё, что пало в грязь.<br />
                        <br /><br />
                        Помню вечер, тихо шли мы,<br />
                        за руки держась.`,
            illustration: "https://clck.ru/Wr3DQ",
        },
    ];

    const [isHideOtherVerses, setHideOtherVerses] = React.useState(false);
    const [ver, setVer] = React.useState(false);

    React.useEffect(() => {
        if (`verse${isHideOtherVerses}id` !== "versefalseid") {
            const array = [0, 1];
            const index = array.indexOf(+isHideOtherVerses);

            if (index > -1) {
                array.splice(index, 1);
                array.forEach(function (item) {
                    document.getElementById(`verse${item}id`).style.display =
                        "none";

                    document.getElementsByClassName(
                        "videoBlock"
                    )[0].style.display = "none";
                });
            }

            setVer(false);
        }
    }, [isHideOtherVerses]);

    React.useEffect(() => {
        if (ver) {
            const array = [0, 1];

            array.forEach(function (item) {
                document.getElementById(`verse${item}id`).style.display =
                    "initial";

                document.getElementsByClassName("videoBlock")[0].style.display =
                    "initial";
            });

            setHideOtherVerses(false);
        }
    }, [ver]);

    return (
        <div className="verseStyles">
            <div id={`verse${verseStore[0].id}id`}>
                <IsShowVerse
                    id={verseStore[0].id}
                    title={verseStore[0].title}
                    verse={verseStore[0].content}
                    illustration={verseStore[0].illustration}
                    setHideOtherVerses={setHideOtherVerses}
                    setVer={setVer}
                />
            </div>
            <div id={`verse${verseStore[1].id}id`}>
                <IsShowVerse
                    id={verseStore[1].id}
                    title={verseStore[1].title}
                    verse={verseStore[1].content}
                    illustration={verseStore[1].illustration}
                    setHideOtherVerses={setHideOtherVerses}
                    setVer={setVer}
                />
            </div>
        </div>
    );
}

export default Verses;
