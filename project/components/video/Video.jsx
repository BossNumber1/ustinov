import React from "react";
import ReactPlayer from "react-player";

function Video() {
    return (
        <div
            style={{
                marginTop: 30,
            }}
        >
            <h1>Дорогой мой человек</h1>
            <h5>Вершина моего искусства, пока что 😁</h5>
            <ReactPlayer
                controls
                url="https://clck.ru/WpteA"
                style={{
                    border: "1px solid gray",
                    marginLeft: 230,
                }}
            />
        </div>
    );
}

export default Video;
