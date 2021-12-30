import React from "react";

function Loader2() {
    React.useEffect(() => {
        document.body.style.background = "black";
        document.getElementById("hi").style.color = "white";

        // document.body.style.opacity = 1;
        // document.body.style.transition = "opacity 1s";

        return () => {
            document.body.style.background = "white";
        };
    }, []);

    return (
        <div id="hi">
            {/* <p data-text="PSYCHO">PSYCHO</p> */}

            <div className="wrapper">
                <h1 className="glitch">
                    <img
                        src="./logo.jpg"
                        alt="logo"
                        width="500px"
                        height="500px"
                    />
                </h1>
                {/* <h1 class="glitch">Мой Устимов</h1> */}
            </div>
        </div>
    );
}

export default Loader2;
