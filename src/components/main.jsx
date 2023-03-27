// module imports
import React, {useState} from "react";
import Que from "../components/que";
import questions from "./questions";

// Image imports
import ImgMobile from "../image/illustration-woman-online-mobile.svg";
import ImgDesktop from "../image/illustration-woman-online-desktop.svg";
import BgPatternMobile from "../image/bg-pattern-mobile.svg";
import BgPatternDesktop from "../image/bg-pattern-desktop.svg";
import BoxImage from "../image/illustration-box-desktop.svg";


// style imports
import "../styles/mobileFirst.css";
import "../styles/desktop.css";




function Main() {

    const [val, setVal] = useState(true);

    function handleChange(data) {
        // setVal(data);
        // console.log(data);
        setVal(data);
        console.log(val);
    }

    const boxImgPos = {
        position: "relative",
        right: "40.625rem"
    }

    
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
            {val ? 
                <div className="box-img-div">
                    <img src={BoxImage} alt="box-img" />
                </div> : 
                <div className="box-img-div" style={boxImgPos}>
                    <img src={BoxImage} alt="box-img" />
                </div>
            }
            <div className="faq">
                <div className="heading">
                    <h1>FAQ</h1>
                </div>
                <div className="content">

                    <Que onClick={handleChange} classData={questions[1].classes[0]} paraData={questions[2].question[0]} ansData={questions[3].answer[0]} />
                    <Que onClick={handleChange} classData={questions[1].classes[1]} paraData={questions[2].question[1]} ansData={questions[3].answer[1]} />
                    <Que onClick={handleChange} classData={questions[1].classes[2]} paraData={questions[2].question[2]} ansData={questions[3].answer[2]} />
                    <Que onClick={handleChange} classData={questions[1].classes[3]} paraData={questions[2].question[3]} ansData={questions[3].answer[3]} />
                    <Que onClick={handleChange} classData={questions[1].classes[4]} paraData={questions[2].question[4]} ansData={questions[3].answer[4]} />

                </div>
            </div>
        </div>
    );

}


export default Main;