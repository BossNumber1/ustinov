import React from "react";
import hidePostIcon from "../../pages/hidePost.png";

function HidePostButton({ setShowVerse }) {
    const hidePost = () => {
        document.body.style.background = "white";
        setShowVerse(false);
    };

    return (
        <button
            onClick={hidePost}
            className="btnHidePost"
            data-title="Скрыть стих"
        >
            <img src={hidePostIcon} alt="hide post icon" />
        </button>
    );
}

export default HidePostButton;
