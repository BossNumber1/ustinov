import React from "react";
import s from "./style.module.css";
import Form from "./Form";
import Header from "./Header";
import Resultat from "./Resultat";

function CenterB({ data, setData }) {
    const [resultat, setResultat] = React.useState(false);

    return (
        <div className={s.centerBody}>
            <div className={s.header}>
                <Header />
            </div>
            <div className={s.message}>
                <Resultat resultat={resultat} data={data} />
            </div>
            <div className={s.titleForm}>Добавить стих</div>
            <div className={s.form}>
                <Form setData={setData} setResultat={setResultat} data={data} />
            </div>
        </div>
    );
}

export default CenterB;
