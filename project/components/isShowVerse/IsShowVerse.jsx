import React from "react";
import AlbumPicture from "./AlbumPicture";
import PostVerse from "./PostVerse";

function IsShowVerse({ id, title, verse, illustration }) {
    const [isShowVerse, setShowVerse] = React.useState(false);

    const showPost = () => {
        document.body.style.background = "gray";
        setShowVerse(true);
    };

    return (
        <>
            {isShowVerse ? (
                <PostVerse
                    title={title}
                    verse={verse}
                    illustration={illustration}
                    setShowVerse={setShowVerse}
                />
            ) : (
                <AlbumPicture
                    id={id}
                    showPost={showPost}
                    albumPicture={illustration}
                    title={title}
                />
            )}
        </>
    );
}

export default IsShowVerse;
