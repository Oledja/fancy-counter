import Title from "./Title.jsx";
import Count from "./Count.jsx";
import ResetButton from "./ResetButton.jsx";
import ButtonContainer from "./ButtonContainer.jsx";
import {useEffect, useState} from "react";
import CountButton from "./CountButton.jsx";

export default function Card() {
    const [count, setCount] = useState(0);
    const locked = count === 5;

    useEffect(() => {
        window.addEventListener("keydown", (event) => {
            if (event.code === "Space") {
                setCount(count + 1);
            }
        })
    });
    

    return (
        <div className={`card ${locked ? "card--limit" : ""}`}>
            <Title locked={locked} />
            <Count count={count} />
            <ResetButton setCount={setCount} />
            <ButtonContainer>
                <CountButton type={"minus"} setCount={ setCount } locked={locked} />
                <CountButton type={"plus"} setCount={ setCount } />
            </ButtonContainer>
        </div>
    )
}