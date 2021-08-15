import React from "react";
import ContentPostVerse from "./ContentPostVerse";
import HidePostButton from "./HidePostButton";

function PostVerse({ title, verse, illustration, setShowVerse }) {
    return (
        <div className="postVerse">
            <HidePostButton setShowVerse={setShowVerse} />
            <ContentPostVerse
                title={title}
                verse={verse}
                illustration={illustration}
            />
        </div>
    );
}

export default PostVerse;
