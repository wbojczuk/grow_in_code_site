import React from "react";
import BlogCard from "../components/blogCard";
import embedNewsletter from "../js/newsletter";
import { Link } from "react-router-dom";

export default function Home(){

    React.useEffect(()=>{
        embedNewsletter();
    }, [])

    return(
        <>
        <div id="newsLetterHighlighter">
            <div id="newsletterHighlighterExit"></div>
        </div>
            <div id="pageID" data-id="home"></div>
            <div id="sideBar"></div>
            <div id="allContent">
                <section id="mainSection">
                    <aside id="aboutUs">
                        <h2>About</h2>
                        <div>Hi, my name is William Bojczuk. I am a Web Developer and the creator/maintainer of <em>Grow In Code</em>. Join me on all my coding adventures through what I write, Enjoy!</div>
                        <Link to="/">Best of the Blog</Link>
                    </aside>
                </section>
                <section id="featuredBlogsSection">
                    <h1 id="featuredBlogsTitle">Featured Blogs</h1>
                    <div id="featuredBlogsContainer">
                        <BlogCard id="123456789" title="Why Use Node Over PHP?" description="There are many people who like PHP and there are many people who like Node, but..." />
                        <BlogCard id="123456789" title="Why Use Node Over PHP?" description="There are many people who like PHP and there are many people who like Node, but..." />
                        <BlogCard id="123456789" title="Why Use Node Over PHP?" description="There are many people who like PHP and there are many people who like Node, but..." />
                    </div>
                </section>
                <section id="newsletterSection">
                    <div id="embeddedNewsletterWrapper">

                    </div>
                </section>
                <section id="latestBlogsSection">
                    <h1 id="latestBlogsTitle">Latest Blogs</h1>
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