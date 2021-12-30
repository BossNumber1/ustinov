import React from "react";

function Resultat({ resultat, data }) {
    return (
        <>
            {resultat ? (
                <div
                    style={{
                        backgroundColor: "#fbcbd1",
                        color: "red",
                        borderRadius: 5,
                        paddingTop: 3,
                        paddingBottom: 5,
                        width: 340,
                        textAlign: "center",
                        fontSize: 23,
                        // position: "absolute",
                        // top: "25%",
                        // left: "50%",
                        // transform: "translate(-50%, -50%)",
                    }}
                >
                    {resultat}
                </div>
            ) : (
                !data && (
                    <div
                        style={{
                            backgroundColor: "yellow",
                            color: "gray",
                            borderRadius: 5,
                            paddingTop: 3,
                            paddingBottom: 5,
                            width: 340,
                            textAlign: "center",
                            fontSize: 23,
                            // position: "absolute",
                            // top: "25%",
                            // left: "50%",
                            // transform: "translate(-50%, -50%)",
                        }}
                    >
                        Форма не заполнена
                    </div>
                )
            )}
            {data && (
                <div
                    style={{
                        backgroundColor: "lightgreen",
                        color: "green",
                        borderRadius: 5,
                        paddingTop: 3,
                        paddingBottom: 5,
                        width: 340,
                        textAlign: "center",
                        fontSize: 18,
                        // position: "absolute",
                        // top: "25%",
                        // left: "50%",
                        // transform: "translate(-50%, -50%)",
                    }}
                >
                    Успешно!
                </div>
            )}
        </>
    );
}

export default Resultat;
