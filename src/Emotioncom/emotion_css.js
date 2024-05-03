import React from "react";
import { css } from "@emotion/css";



const Emotion = () => {
    const color = 'red'
    return (
        <div className={css`
            padding:32px;
            background-color:hotpink;
            font-size:24px;
            border-radius:40px;
            transition:1.7s;
            margin-left:10%;
            width:70%;
            &:hover {
                color:${color};
                background-color:lightblue;
                
                border-radius:0px;
                transparent:0.6;
            };
        `}>
            Highly Skilled react developer with 7 experience in developing and implementing front-end architectures that have resulted in significant increases in page load speed and user engagement
        </div>
    )
}

export default Emotion;