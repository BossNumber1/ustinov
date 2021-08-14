import React from "react";

function AlbumPicture({ showPost, firstIll }) {
    return (
        <div className="verseCard" onClick={showPost}>
            <img src={firstIll} alt="album picture" />
            <div className="titleOnPage">Ах</div>
        </div>
    );
}

export default AlbumPicture;
