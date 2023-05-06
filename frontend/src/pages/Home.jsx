import React from "react";
import BlogCard from "../components/blogCard";
import embedNewsletter from "../js/newsletter";
import { Link } from "react-router-dom";
import titlechanger from "../js/titlechanger";

export default function Home(props){

    const [latestBlogs, setLatestBlogs] = React.useState([]);
    const latestBlogsComponents = latestBlogs.map((blog)=>{
        return(
            <BlogCard key={blog._id} id={blog._id} title={blog.metadata.title} description={blog.metadata.description}/>
        )
    });

    const [featuredBlogs, setFeaturedBlogs] = React.useState([]);
    const featuredBlogsComponents = featuredBlogs.map((blog)=>{
        return(
            <BlogCard key={blog._id} id={blog._id} title={blog.metadata.title} description={blog.metadata.description}/>
        )
    });
    const [improveYourself, setImproveYourself] = React.useState([]);
    const improveYourselfComponents = improveYourself.map((blog)=>{
        return(
            <BlogCard key={blog._id} id={blog._id} title={blog.metadata.title} description={blog.metadata.description}/>
        )
    });

    React.useEffect(()=>{
        window.scrollTo(0,0);
        embedNewsletter();
        titlechanger("Grow In Code", "Technology Blog");
        props.setCheckLinks(["close"]);

        // GET LATEST BLOGS
        getLatestBlogs();
        async function getLatestBlogs(){
            const fetchData = await fetch(`${NODESERVER}/api/latestblogs/3`);
            const blogData = await fetchData.json();
            setLatestBlogs(blogData);
        }
        getFeaturedBlogs();
        async function getFeaturedBlogs(){
            const fetchData = await fetch(`${NODESERVER}/api/blogsbyids/${FEATUREDBLOGS}`);
            const blogData = await fetchData.json();
            setFeaturedBlogs(blogData);
        }
        // getImproveYourself();
        // async function getImproveYourself(){
        //     const fetchData = await fetch(`${NODESERVER}/api/blogsbyids/${IMPROVEYOURSELF}`);
        //     const blogData = await fetchData.json();
        //     setImproveYourself(blogData);
        // }
    }, []);

    

    return(
        <>
        <div id="blueGlow1"></div>
        <div id="blueGlow2"></div>
        <div id="blueGlow3"></div>
            <div id="pageID" data-id="home"></div>
            <div id="sideBar"></div>
            <div id="allContent">
                <section id="mainSection">
                    <Link to="/about" id="aboutMe">About Me</Link>
                    <aside id="aboutUs">
                        <h2>Coding</h2>
                        <div>Hi, my name is William Bojczuk. I am a Web Developer and the creator/maintainer of <em>Grow In Code</em>. Join me on all my coding adventures through what I write, Enjoy!</div>
                        <Link to="/blog">Best of the Blog</Link>
                    </aside>
                </section>

                <section id="featuredBlogsSection">
                    <h1 id="featuredBlogsTitle"><span>Featured Posts</span></h1>
                    <div id="featuredBlogsContainer">
                        {featuredBlogsComponents}
                    </div>
                </section>

                <section id="categoriesSection">
                    <div className="title">Code Categories</div>
                    <div id="categoryWrapper">
                        <Link className="category react" to="/blogcategory/react"><span>React</span></Link>
                        <Link className="category node" to="/blogcategory/node"><span>Node/Express</span></Link>
                        <Link className="category javascript" to="/blogcategory/javascript"><span>Javascript</span></Link>
                        <Link className="category html" to="/blogcategory/html"><span>HTML</span></Link>
                        <Link className="category css" to="/blogcategory/css"><span>CSS</span></Link>
                        <Link className="category php" to="/blogcategory/php"><span>PHP</span></Link>
                    </div>
                </section>

                <section id="newsletterSection">
                    <div id="embeddedNewsletterWrapper">

                    </div>
                </section>
                <section id="latestBlogsSection">
                    <h1 id="latestBlogsTitle">Latest Posts</h1>
                    <div id="latestBlogsContainer">
                        {latestBlogsComponents}
                    </div>
                </section>

                {/* <section id="improveBlogsSection">
                    <h1 id="improveBlogsTitle">Improve Yourself</h1>
                    <div id="improveBlogsContainer">
                        {improveYourselfComponents}
                    </div>
                </section> */}
            </div>
        </>
    )
}