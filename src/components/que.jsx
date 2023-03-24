import React, { useState } from "react";
import Arrow from "../image/icon-arrow-down.svg";
// import questions from "../components/questions";


function Que(props) {

    const [showAns, changeAns] = useState(false);

    function handleClick() {
        changeAns(!showAns);
    }

    return (
        <div className={props.classData}>
            <div className="arrow-div">
                <p style={showAns ? {fontWeight: "700"} : {fontWeight: "400"}}>{props.paraData}</p>
                <button onClick={handleClick} type="button" style={showAns ? {transform: `rotate(${180}deg)`} : {transform: `rotate(${0}deg)`}} >
                    <img src={Arrow} alt="icon-arrow-down" />
                </button>
            </div>
            {showAns && <p className="ans-para">{props.ansData}</p>}
            <hr />
        </div>
    );

}


export default Que;