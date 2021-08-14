import React from "react";
import vk from "../../pages/vk.png";
import insta from "../../pages/insta.png";
import twt from "../../pages/twt.png";
import yt from "../../pages/yt.png";

function Footer() {
    return (
        <footer style={{ marginLeft: 495, marginTop: 40 }}>
            {/* <div> */}
            <a href="https://vk.com/moy_ustimov" target="_blank">
                <img src={vk} alt="vk_icon" style={{ marginRight: 32 }} />
            </a>

            <a href="https://twitter.com/moy_ustimov" target="_blank">
                <img src={twt} alt="twitter_icon" style={{ marginRight: 32 }} />
            </a>
            <a href="https://www.instagram.com/moy_ustimov">
                <img
                    src={insta}
                    alt="instagramm_icon"
                    style={{ marginRight: 32 }}
                />
            </a>
            <a href="https://youtube.com/moy_ustimov" target="_blank">
                <img src={yt} alt="youtube_icon" style={{ marginRight: 32 }} />
            </a>
            {/* </div> */}
        </footer>
    );
}

export default Footer;
