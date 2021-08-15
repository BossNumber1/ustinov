import React from "react";
import ContentPostVerse from "./ContentPostVerse";
import HidePostButton from "./HidePostButton";

function PostVerse({ verse, illustration, setShowVerse }) {
    return (
        <div className="postVerse">
            <HidePostButton setShowVerse={setShowVerse} />
            <ContentPostVerse verse={verse} illustration={illustration} />
        </div>
    );
}

export default PostVerse;
