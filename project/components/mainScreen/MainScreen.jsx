import React from "react";
import logotip from "../../pages/logotip.jpg";
import entm from "../../pages/entm.png";
import one from "../../pages/about/1.jpg";
import two from "../../pages/about/2.jpg";
import three from "../../pages/about/3.jpg";
import four from "../../pages/about/4.jpg";
import five from "../../pages/about/5.jpg";
import six from "../../pages/about/6.jpg";
import seven from "../../pages/about/7.jpg";

function MainScreen() {
    return (
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
    );
}

export default MainScreen;
