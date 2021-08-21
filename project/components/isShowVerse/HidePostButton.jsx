import React from "react";
import Router from "next/router";
import hidePostIcon from "../../pages/hidePost.png";

function HidePostButton() {
    return (
        <button onClick={() => Router.push("/")} className="btnHidePost">
            <img src={hidePostIcon} alt="hide post icon" />
        </button>
    );
}

export default HidePostButton;
