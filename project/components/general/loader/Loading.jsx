import Loader from "react-loader-spinner";
import Loader2 from "./Loader2";

function Loading({ getVerse = false }) {
    if (getVerse === "true") {
        return (
            <div
                style={{
                    // display: "flex",
                    // // flexDirection: "column",
                    // justifyContent: "center",
                    // alignItems: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                {/* // style={{ textAlign: "center", top: "50%" }}> */}
                {/* <Loader
                    type="Hearts"
                    // type="TailSpin"
                    color="black"
                    height={160}
                    width={160}
                /> */}
                <Loader2 />
            </div>
        );
    }

    return <Loader type="ThreeDots" color="gray" height={40} width={40} />;
}

export default Loading;
