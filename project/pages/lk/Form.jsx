import React from "react";
import s from "./style.module.css";

function Form({ setData, setResultat, data }) {
    const [title, setTitle] = React.useState("");
    const [text, setText] = React.useState("");
    const [pictu, setPictu] = React.useState("");

    let onHandleChangeTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    };

    let onHandleChangeText = (e) => {
        e.preventDefault();
        setText(e.target.value);
    };

    let onHandleChangePictu = (e) => {
        e.preventDefault();
        setPictu(e.target.value);
    };

    let duedue = (e) => {
        e.preventDefault();

        if (title !== "" && text !== "" && pictu !== "") {
            setResultat(false);
            setTitle("");
            setText("");
            setPictu("");
            setData([
                { key: 0, name: "Заголовок", content: e.target[0].value },
                { key: 1, name: "Стих", content: e.target[1].value },
                { key: 2, name: "Иллюстрация", content: e.target[2].value },
            ]);
        } else {
            setResultat("Не все поля заполнены");
        }
    };

    return (
        <div>
            <div
                style={{
                    // textAlign: "center",
                    // position: "absolute",
                    top: "50%",
                    left: "50%",
                    // transform: "translate(-50%, -50%)",
                    marginLeft: 15,
                    marginRight: 15,
                    paddingLeft: 15,
                }}
                className={s.forma}
            >
                <form onSubmit={duedue}>
                    <div style={{ display: "flex", marginBottom: 13 }}>
                        <div>
                            <input
                                name="text"
                                type="text"
                                placeholder="Заголовок"
                                onChange={onHandleChangeTitle}
                                value={title}
                            />
                        </div>
                    </div>
                    <div style={{ display: "flex", marginBottom: 13 }}>
                        <div>
                            <textarea
                                name="text"
                                type="text"
                                placeholder="Текст"
                                onChange={onHandleChangeText}
                                value={text}
                            />
                        </div>
                    </div>
                    <div style={{ display: "flex", marginBottom: 13 }}>
                        <div>
                            <textarea
                                name="illustration"
                                type="text"
                                placeholder="Иллюстрация"
                                onChange={onHandleChangePictu}
                                value={pictu}
                            />
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div className={s.saveBtn}>
                            <button disabled={data && "enabled"}>
                                Сохранить
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
