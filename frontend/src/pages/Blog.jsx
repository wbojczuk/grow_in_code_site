import React from "react";
import { Link } from "react-router-dom";
import BlogCard2 from "../components/BlogCard2";
import LatestBlog from "../components/LatestBlog";

export default function Blog(props){

    const [featuredPosts, setFeaturedPosts] = React.useState([]);
    const featuredPostsComponents = featuredPosts.map((post)=>{
        return(
            <BlogCard2 id={post._id} key={post._id} title={post.metadata.title} description={post.metadata.description} />
        )
    });
    
    React.useEffect(()=>{
        window.scrollTo(0,0);
        props.setCheckLinks(["close"]);

        getFeaturedPosts();
        async function getFeaturedPosts(){
            const fetchData = await fetch(`${NODESERVER}/api/blogsbyids/${POPULARPOSTS}`);
            const blogData = await fetchData.json();
            setFeaturedPosts(blogData);
        }
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
                    {featuredPostsComponents}
                </div>
            </section>
            <section id="latestPostSection">
                <h1 className="title">Latest Post</h1>
                
                <div className="center">
                    <LatestBlog />
                </div>
            </section>
        </>
    )
}