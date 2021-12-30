import React from "react";
import s from "./style.module.css";

function RightB({ data, setData }) {
    const [resSend, setResSend] = React.useState("");

    let sendHandler = (e) => {
        e.preventDefault();
        setResSend("Отправлено");
    };

    let upHandler = (e) => {
        e.preventDefault();
        setData(false);
        setResSend("");
    };

    return (
        <>
            {data ? (
                data && !resSend ? (
                    <div className={s.answer}>
                        {data.map((el) => (
                            <div key={el.key}>
                                <b>{el.name}</b> = {el.content}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={s.sendSuccess}>{resSend}</div>
                )
            ) : (
                <div style={{ fontSize: 16, marginTop: -90 }}>
                    Пока нечего отправить
                </div>
            )}

            {data && !resSend ? (
                <div className={s.sendBtn} style={{ marginLeft: 30 }}>
                    <input
                        type="submit"
                        value="Отправить"
                        onClick={sendHandler}
                    />
                </div>
            ) : (
                data && (
                    <div className={s.sendBtn}>
                        <input
                            type="submit"
                            value="Заново"
                            onClick={upHandler}
                        />
                    </div>
                )
            )}
        </>
    );
}

export default RightB;
