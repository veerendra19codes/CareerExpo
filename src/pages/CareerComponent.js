import React from "react";
import "./Career.css";
import {ChevronRight} from "lucide-react";
import "./details.css";


export const CareerComponent = (props) => {
    return (
        <>
                <div className="cardc">
                    <div className="img_container">
                        <img src={props.imgsrc} alt="remote image" />
                    </div>
                    <div className="career_heading">
                        <h3>{props.title}</h3>
                    </div>
                    <div className="career_review">
                        <h5>SATISFACTION</h5>
                        <p>{props.review}</p>
                    </div>
                    <div className="career_salary">
                        <h5>SALARY</h5>
                        <p>{props.salary}</p>
                    </div>
                    <div className="arrow">
                        <ChevronRight />
                    </div>
                </div>
        </>
    );
};
















