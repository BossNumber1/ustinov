import React from "react";

function ContentPostVerse({ title, verse, illustration }) {
    return (
        <>
            <div className="labelVerse">{title}</div>
            <div
                dangerouslySetInnerHTML={{
                    __html: verse,
                }}
            />
            <div className="illustration">
                <img src={illustration} alt="illustration" />
            </div>
        </>
    );
}

export default ContentPostVerse;
