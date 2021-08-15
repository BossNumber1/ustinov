import React from "react";

function ContentPostVerse({ illustration, verse }) {
    return (
        <>
            <div className="labelVerse">Ах!</div>
            <div
                dangerouslySetInnerHTML={{
                    __html: verse,
                }}
            />
            <div className="firstIll">
                <img src={illustration} alt="illustration" />
            </div>
        </>
    );
}

export default ContentPostVerse;
