import React from "react";
import "../../css/blogviewer/sidenav.css";
import { Link } from "react-router-dom";

export default function SideNav(){
    return(
        <div id="sideNav">
            
            <Link to="/about" id="sideNavAboutMe">
                <div className="title">About Me</div>
            </Link>

            <div id="sideNavPopularPosts">
                <div className="title">Popular Posts</div>

                <Link to="/blogviewer/1683046326716">How useEffect Saved Me</Link>
                <Link to="/blogviewer/1683207802941">Linux Shell Commands</Link>
            </div>

            <div id="sideNavFeaturedPost">
                <div className="title">Featured Post</div>
                <Link to="/blogviewer/1683207802941" className="post">
                    <div className="title">How useEffect Saved Me</div>
                    <div className="description">Check out how this React hook saves me a lot of time!</div>
                </Link>
            </div>

            <div id="sideNavResources">
                <div className="title">Resources</div>
                <Link to="/blogviewer/1683046326716">
                    <div className="title">Working With useEffect</div>
                </Link>
                <Link to="/blogviewer/1683207802941">
                    <div className="title">Linux Shell Commands</div>
                </Link>
            </div>

        </div>
    )
}