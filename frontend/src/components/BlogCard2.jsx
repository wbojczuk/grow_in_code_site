import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard2(props){
    return(
        <Link to={`/blogviewer?${props.id}`} className="blog-card-2">
            <div style={{backgroundImage: (props.img) ? `url("${props.img}")` : "none"}} className="img"></div>
            <div className="content">
                <div className="title">{props.title}</div>
                <div className="desc">{props.desc}</div>
            </div>
        </Link>
    )
}