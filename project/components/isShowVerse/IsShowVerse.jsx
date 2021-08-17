import React from "react";
import AlbumPicture from "./AlbumPicture";
import PostVerse from "./PostVerse";

// function IsShowVerse({ id, title, verse, illustration, setHideOtherVerses }) {
function IsShowVerse({
    id,
    title,
    verse,
    illustration,
    setHideOtherVerses,
    setVer,
}) {
    const [isShowVerse, setShowVerse] = React.useState(false);

    const showPost = () => {
        // alert("show");
        document.body.style.background = "gray";
        setShowVerse(true);
        setHideOtherVerses(id);
        // setHideOtherVerses(true)
    };

    return (
        <>
            {isShowVerse ? (
                <PostVerse
                    title={title}
                    verse={verse}
                    illustration={illustration}
                    setShowVerse={setShowVerse}
                    setVer={setVer}
                    // id={id}
                />
            ) : (
                <AlbumPicture
                    id={id}
                    showPost={showPost}
                    albumPicture={illustration}
                    title={title}
                    setHideOtherVerses={setHideOtherVerses}
                />
            )}
        </>
    );
}

export default IsShowVerse;
