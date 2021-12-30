import React from "react";
import CenterB from "./CenterB";
import LeftB from "./LeftB";
import RightB from "./RightB";
import s from "./style.module.css";

export default function lk() {
    const [data, setData] = React.useState(false);

    return (
        <div className={s.appBody}>
            <div className={s.leftB}>
                <LeftB />
            </div>
            <div className={s.centerB}>
                <CenterB data={data} setData={setData} />
            </div>
            <div className={s.rightB}>
                <RightB data={data} setData={setData} />
            </div>
        </div>
    );
}
