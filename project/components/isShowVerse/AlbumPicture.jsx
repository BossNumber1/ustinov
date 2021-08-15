import React from "react";

function AlbumPicture({ id, showPost, albumPicture, title }) {
    React.useEffect(() => {
        let verseCardElement = document.getElementsByClassName("verseCard")[id];
        verseCardElement.style.backgroundImage = `url('${albumPicture}')`;
    }, []);

    return (
        <div className="albumPicture" onClick={showPost}>
            <div className="verseCard" />
            <div className="titleOnPage">{title}</div>
        </div>
    );
}

export default AlbumPicture;
