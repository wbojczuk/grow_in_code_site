import React from "react";
import { Link } from "react-router-dom";
import BlogCard2 from "../components/BlogCard2";
import LatestBlog from "../components/LatestBlog";

export default function Blog(props){
    
    React.useEffect(()=>{
        window.scrollTo(0,0);
        props.setCheckLinks(["close"])
    }, []);

    return(
        <>
            <div id="pageID" data-id="blog"></div>
            <section id="mainBlogHero">
                <div className="shader"></div>
                <h1 className="title">New to the blog? Welcome!</h1>
                <h3 className="desc">Here’s a collection of great posts I’ve put together for newcomers</h3>
                <Link to="/bestoftheblog">Best of the Blog</Link>
            </section>
            <section id="featuredPostsSection">
                <div className="center"><div className="title"><span>Popular Posts</span></div></div>
                <div id="featuredPostsWrapper">
                    <BlogCard2 title="Why using Vite saved my life and how it will save yours" desc="I am serious, Vite had saved my life as a website developer. Find out how it saved mine and how it’ll save yours" id={1234567} />
                    <BlogCard2 title="Why using Vite saved my life and how it will save yours" desc="I am serious, Vite had saved my life as a website developer. Find out how it saved mine and how it’ll save yours" id={1234567} />
                    <BlogCard2 title="Why using Vite saved my life and how it will save yours" desc="I am serious, Vite had saved my life as a website developer. Find out how it saved mine and how it’ll save yours" id={1234567} />
                    <BlogCard2 title="Why using Vite saved my life and how it will save yours" desc="I am serious, Vite had saved my life as a website developer. Find out how it saved mine and how it’ll save yours" id={1234567} />
                </div>
            </section>
            <section id="latestPostSection">
                <h1 className="title">Latest Post</h1>
                
                <div className="center">
                    <LatestBlog title="Why using Vite saved my life and how it will save yours" desc="I am serious, Vite has saved my life as a website developer. Find out how it saved mine and how it’ll save yours" id={1234567} />
                </div>
            </section>
        </>
    )
}