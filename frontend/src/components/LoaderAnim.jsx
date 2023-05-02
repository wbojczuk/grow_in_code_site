import React from "react";
import "../css/loaderanim.css";
export default function LoaderAnim(props){
    return(
        <div id="loaderAnim">
            <svg style={{margin: "auto", background: "none", display: "block", "shapeRendering": "auto"}} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#22aaa2" stroke="none">
                <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
                </path>
            </svg>
        </div>
    )
}