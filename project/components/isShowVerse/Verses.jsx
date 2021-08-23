import React from "react";
import Router from "next/router";
import AlbumPicture from "./AlbumPicture";
import axios from "axios";
import Loading from "../general/loader/Loading";
// localhost: 80; --- www.ustinnov.herokuapp.com
function Verses() {
    const [versesStore, setVersesStore] = React.useState(false);

    React.useEffect(() => {
        axios
            .get(`https://ustinnov.herokuapp.com/getAllAlbumCovers/`)
            .then((response) => {
                setVersesStore(response.data);
            });
    }, []);

    return (
        <div className="verseStyles">
            {versesStore ? (
                <>
                    <div onClick={() => Router.push("/getVerse/first")}>
                        <AlbumPicture
                            id={versesStore[0].id}
                            albumPicture={versesStore[0].illustration}
                            title={versesStore[0].title}
                        />
                    </div>
                    <div onClick={() => Router.push("/getVerse/second")}>
                        <AlbumPicture
                            id={versesStore[1].id}
                            albumPicture={versesStore[1].illustration}
                            title={versesStore[1].title}
                        />
                    </div>
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
}

export default Verses;
