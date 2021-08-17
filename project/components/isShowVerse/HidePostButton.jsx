import React from "react";
import hidePostIcon from "../../pages/hidePost.png";

function HidePostButton({ setShowVerse, setVer }) {
    const hidePost = () => {
        document.body.style.background = "white";
        setShowVerse(false);
        setVer(true);
    };

    return (
        <button onClick={hidePost} className="btnHidePost">
            <img src={hidePostIcon} alt="hide post icon" />
        </button>
    );
}

export default HidePostButton;
