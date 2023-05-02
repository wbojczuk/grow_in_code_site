import React from "react";
import { Link } from "react-router-dom";
export default function BlogCard(props){
    return(
        <Link to={`/blogviewer?id=${props.id}`} className="blog-card">
            <div className="title">{props.title}</div>
            <div className="desc">{props.description}</div>
        </Link>
    )
}