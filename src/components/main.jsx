// module imports
import React from "react";
import Que from "../components/que";
import questions from "./questions";

// Image imports
import ImgMobile from "../image/illustration-woman-online-mobile.svg";
import BgPatternMobile from "../image/bg-pattern-mobile.svg";

// style imports
import "../styles/mobileFirst.css";




function Main() {


    // function QueLoop() {
    //     for (let i = 0; i < 5; i++){
    //        return <Que classData={questions[1].classes[i]} paraData={questions[2].question[i]} />
    //     }
    // }

    
    return (
        <div className="main">
            <div className="main-img">
                <img src={ImgMobile} alt="illustration-woman-online-mobile" />
            </div>
            <div className="pattern-img">
                <img src={BgPatternMobile} alt="bg-pattern-mobile" />
            </div>
            <div className="faq">
                <div className="heading">
                    <h1>FAQ</h1>
                </div>
                <div className="content">

                    <Que classData={questions[1].classes[0]} paraData={questions[2].question[0]} ansData={questions[3].answer[0]} />
                    <Que classData={questions[1].classes[1]} paraData={questions[2].question[1]} ansData={questions[3].answer[1]} />
                    <Que classData={questions[1].classes[2]} paraData={questions[2].question[2]} ansData={questions[3].answer[2]} />
                    <Que classData={questions[1].classes[3]} paraData={questions[2].question[3]} ansData={questions[3].answer[3]} />
                    <Que classData={questions[1].classes[4]} paraData={questions[2].question[4]} ansData={questions[3].answer[4]} />

                </div>
            </div>
        </div>
    );

}


export default Main;