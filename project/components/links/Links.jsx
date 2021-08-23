import React from "react";
import vk from "../../pages/vk.png";
import insta from "../../pages/insta.png";
import twt from "../../pages/twt.png";
import yt from "../../pages/yt.png";

function Links() {
    return (
        <div className="links">
            <a href="https://vk.com/moy_ustimov" target="_blank">
                <img src={vk} alt="vk_icon" />
            </a>

            <a href="https://twitter.com/moy_ustimov" target="_blank">
                <img src={twt} alt="twitter_icon" />
            </a>

            <a href="https://www.instagram.com/moyustimov">
                <img src={insta} alt="instagramm_icon" />
            </a>

            <a
                href="https://youtube.com/channel/UC43mSpYz8e2ori88IyVDF8A"
                target="_blank"
            >
                <img src={yt} alt="youtube_icon" />
            </a>
        </div>
    );
}

export default Links;
