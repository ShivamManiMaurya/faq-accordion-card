// module imports
import React from "react";
import Que from "../components/que";
import questions from "./questions";

// Image imports
import ImgMobile from "../image/illustration-woman-online-mobile.svg";
import ImgDesktop from "../image/illustration-woman-online-desktop.svg";
import BgPatternMobile from "../image/bg-pattern-mobile.svg";
import BgPatternDesktop from "../image/bg-pattern-desktop.svg";
import BoxImg from "../image/illustration-box-desktop.svg";

// style imports
import "../styles/mobileFirst.css";
import "../styles/desktop.css";




function Main() {

    
    return (
        <div className="main">
            <div className="main-img-div">
                <img className="main-img-mobile" src={ImgMobile} alt="illustration-woman-online-mobile" />
                <img className="main-img-desktop" src={ImgDesktop} alt="illustration-woman-online-desktop" />
            </div>
            <div className="pattern-img-div">
                <img className="pattern-img-mobile" src={BgPatternMobile} alt="bg-pattern-mobile" />
                <img className="pattern-img-desktop" src={BgPatternDesktop} alt="bg-pattern-desktop" />
            </div>
            <div className="box-img-div">
                <img src={BoxImg} alt="box-img" />
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