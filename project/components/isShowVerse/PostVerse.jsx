import React from "react";
import ContentPostVerse from "./ContentPostVerse";
import HidePostButton from "./HidePostButton";

function PostVerse({ title, verse, illustration }) {
    return (
        <div className="postVerse">
            <HidePostButton />
            <ContentPostVerse
                title={title}
                verse={verse}
                illustration={illustration}
            />
        </div>
    );
}

export default PostVerse;
