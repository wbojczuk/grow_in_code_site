import React from "react";
import { Link } from "react-router-dom";

export default function Tags(props){
    const tagComponents = props.tags.map((tag)=>{
        return(
            <div key={tag} className="tag">{tag}</div>
        )
    });
    return(
        <div id="tagsContainer">
            <div className="title">Tags</div>
            <div className="separator"></div>
            <div className="tags">
                {tagComponents}
            </div>
        </div>
    )
}