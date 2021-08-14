import React from "react";

function Welcome() {
    return (
        <div
            style={{
                marginBottom: 23,
                paddingBottom: 23,
                borderBottom: "1px solid gray",
            }}
        >
            <div className="mt-4" style={{ marginBottom: 10 }}>
                Привет 🙂
            </div>
            <div className="mt-4 mb-4" style={{ marginBottom: 15 }}>
                Меня зовут Дмитрий Устинов. Пишу под псевдонимом Мой Устимов
            </div>
            <div style={{ marginBottom: 15 }}>
                <div>Я - поэт</div>
                <div>Пишу стихи, создаю клипы и делаю многое другое</div>
            </div>

            <div className="mt-4 mb-5">
                <b>Welcome</b>
            </div>
        </div>
    );
}

export default Welcome;
