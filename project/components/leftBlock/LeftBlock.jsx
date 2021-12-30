import React from "react";
import eight from "../../pages/about/8.jpg";
import signa from "../../pages/about/signa.jpg";
import twit from "../../pages/twit.png";
import Links from "../links/Links";

function LeftBlock() {
    return (
        <>
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
                <Links />
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
                <p>Мечтает о многом. Например, переехать в другой город ☺</p>
            </div>
            <div className="twitIll">
                <img src={twit} alt="post in twitter" />
            </div>
            <div onClick={() => alert("photo")}>Фотографии</div>
            <div>Видео</div>
            <div>Песни</div>
        </>
    );
}

export default LeftBlock;
