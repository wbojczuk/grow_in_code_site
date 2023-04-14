import React from "react";
import BlogCard from "../components/blogCard";
import embedNewsletter from "../js/newsletter";
import { Link } from "react-router-dom";

export default function Home(props){

    React.useEffect(()=>{
        embedNewsletter();
        props.setCheckLinks(["close"]);
    }, [])

    return(
        <>
        <div id="blueGlow1"></div>
        <div id="blueGlow2"></div>
        <div id="blueGlow3"></div>
        <div id="newsLetterHighlighter">
            <div id="newsletterHighlighterExit"></div>
        </div>
            <div id="pageID" data-id="home"></div>
            <div id="sideBar"></div>
            <div id="allContent">
                <section id="mainSection">
                    <Link to="/about" id="aboutMe">About Me</Link>
                    <aside id="aboutUs">
                        <h2>Coding</h2>
                        <div>Hi, my name is William Bojczuk. I am a Web Developer and the creator/maintainer of <em>Grow In Code</em>. Join me on all my coding adventures through what I write, Enjoy!</div>
                        <Link to="/">Best of the Blog</Link>
                    </aside>
                </section>

                <section id="featuredBlogsSection">
                    <h1 id="featuredBlogsTitle"><span>Featured Posts</span></h1>
                    <div id="featuredBlogsContainer">
                        <BlogCard id="123456789" title="Why Use Node Over PHP?" description="There are many people who like PHP and there are many people who like Node, but..." />
                        <BlogCard id="123456789" title="Why Use Node Over PHP?" description="There are many people who like PHP and there are many people who like Node, but..." />
                        <BlogCard id="123456789" title="Why Use Node Over PHP?" description="There are many people who like PHP and there are many people who like Node, but..." />
                    </div>
                </section>

                <section id="categoriesSection">
                    <div className="title">Code Categories</div>
                    <div id="categoryWrapper">
                        <Link className="category react" to="/blogcategory?category=react"><span>React</span></Link>
                        <Link className="category node" to="/blogcategory?category=node"><span>Node/Express</span></Link>
                        <Link className="category javascript" to="/blogcategory?category=javascript"><span>Javascript</span></Link>
                        <Link className="category html" to="/blogcategory?category=html"><span>HTML</span></Link>
                        <Link className="category css" to="/blogcategory?category=css"><span>CSS</span></Link>
                        <Link className="category php" to="/blogcategory?category=php"><span>PHP</span></Link>
                    </div>
                </section>

                <section id="newsletterSection">
                    <div id="embeddedNewsletterWrapper">

                    </div>
                </section>
                <section id="latestBlogsSection">
                    <h1 id="latestBlogsTitle">Latest Posts</h1>
                    <div id="latestBlogsContainer">
                        <BlogCard id="123456789" title="Why Use Node Over PHP?" description="There are many people who like PHP and there are many people who like Node, but..." />
                        <BlogCard id="123456789" title="Why Use Node Over PHP?" description="There are many people who like PHP and there are many people who like Node, but..." />
                        <BlogCard id="123456789" title="Why Use Node Over PHP?" description="There are many people who like PHP and there are many people who like Node, but..." />
                    </div>
                </section>

                <section id="improveBlogsSection">
                    <h1 id="improveBlogsTitle">Improve Yourself</h1>
                    <div id="improveBlogsContainer">
                        <BlogCard id="123456789" title="Why Use Node Over PHP?" description="There are many people who like PHP and there are many people who like Node, but..." />
                        <BlogCard id="123456789" title="Why Use Node Over PHP?" description="There are many people who like PHP and there are many people who like Node, but..." />
                        <BlogCard id="123456789" title="Why Use Node Over PHP?" description="There are many people who like PHP and there are many people who like Node, but..." />
                    </div>
                </section>
            </div>
        </>
    )
}