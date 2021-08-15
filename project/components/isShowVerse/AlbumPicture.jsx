import React from "react";

function AlbumPicture({ showPost, albumPicture }) {
    return (
        <div className="verseCard" onClick={showPost}>
            <img src={albumPicture} alt="album picture" />
            <div className="titleOnPage">Ах</div>
        </div>
    );
}

export default AlbumPicture;
