import React from "react";
import Router from "next/router";

function Index() {
    return (
        <>
            <h1>Какой стих хочешь прочитать?</h1>

            <ul style={{ cursor: "pointer" }}>
                <li onClick={() => Router.push("/getVerse/firstVerse")}>
                    Первый
                </li>
                <li onClick={() => Router.push("/getVerse/secondVerse")}>
                    Второй
                </li>
                <li onClick={() => Router.push("/getVerse/thirdVerse")}>
                    Третий
                </li>
            </ul>
        </>
    );
}

export default Index;
