import React from "react";
import AlbumPicture from "./AlbumPicture";
import PostVerse from "./PostVerse";

function IsShowVerse({ verse, illustration }) {
    const [isShowVerse, setShowVerse] = React.useState(false);

    const showPost = () => {
        document.body.style.background = "gray";
        setShowVerse(true);
    };

    return (
        <>
            {isShowVerse ? (
                <PostVerse
                    verse={verse}
                    illustration={illustration}
                    setShowVerse={setShowVerse}
                />
            ) : (
                <AlbumPicture showPost={showPost} albumPicture={illustration} />
            )}
        </>
    );
}

export default IsShowVerse;
