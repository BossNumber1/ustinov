import React from "react";
import ContentPostVerse from "./ContentPostVerse";
import HidePostButton from "./HidePostButton";

function PostVerse({
    title,
    verse,
    illustration,
    setShowVerse,
    // setHideOtherVerses,
    // id,
    setVer,
}) {
    return (
        <div className="postVerse">
            <HidePostButton
                setShowVerse={setShowVerse}
                // setHideOtherVerses={setHideOtherVerses}
                // id={id}
                setVer={setVer}
            />
            <ContentPostVerse
                title={title}
                verse={verse}
                illustration={illustration}
            />
        </div>
    );
}

export default PostVerse;
