import React from "react";
import { Link } from "react-router-dom";

export default function LatestBlog(props){
    return(
        <Link to={`/blogviewer?${props.id}`} id="latestBlogCard">
            <div className="content">
                <div className="title">{props.title}</div>
                <div className="date">April 17, 2023</div>
                <div className="desc">{props.desc}</div>
            </div>
        </Link>
    )
}