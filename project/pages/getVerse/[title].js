import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { MainLayout } from "../../components/MainLayout";
import PostVerse from "../../components/isShowVerse/PostVerse";
import Loading from "../../components/general/loader/Loading";

function GetVerse() {
    const router = useRouter();
    const [verse, setVerse] = React.useState(false);

    React.useEffect(() => {
        router.query.title !== undefined &&
            axios
                .get(
                    `https://ustinnov.herokuapp.com/getVerse/${router.query.title}`
                )
                .then((response) => {
                    setVerse(response.data);
                });
    }, [router.query.title]);

    return (
        <MainLayout title={router.query.title}>
            {verse ? (
                <PostVerse
                    title={verse.title}
                    verse={verse.content}
                    illustration={verse.illustration}
                />
            ) : (
                <Loading getVerse="true" />
            )}
        </MainLayout>
    );
}

export default GetVerse;
