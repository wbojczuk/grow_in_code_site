import React from "react";
import BlogCard from "../components/BlogCard";
import "../css/blogcategory.css";
import LoaderAnim from "../components/LoaderAnim";
export default function BlogCategory(props){

    const [loaderActive, setLoaderActive] = React.useState(true);

    const [blogCategoryPosts, setBlogCategoryPosts] = React.useState([]);
    const blogCategoryComponents = blogCategoryPosts.map((post)=>{
        return(
            <BlogCard id={post._id} key={post._id} title={post.metadata.title} description={post.metadata.description} />
        )
    });

    const category = new URLSearchParams(window.location.search).get("category");

    let categoryTitle = "";
    let categoryDesc = "";
    switch(category){
        case "react":
            categoryTitle = "React";
            categoryDesc = "The best frontend framework in the entire word! /s";
        break;
        case "html":
            categoryTitle = "HTML";
            categoryDesc = "The building blocks of the web.";
        break;
        case "javascript":
            categoryTitle = "JavaScript";
            categoryDesc = "The most popular scripting language for the web.";
        break;
        case "css":
            categoryTitle = "CSS";
            categoryDesc = "Makes things look good.";
        break;
        case "node":
            categoryTitle = "Node/Express";
            categoryDesc = "Backend framework made of JavaScript.";
        break;
        case "php":
            categoryTitle = "PHP";
            categoryDesc = "A very old language for the backend.";
        break;

    }


    React.useEffect(()=>{
        window.scrollTo(0,0);
        props.setCheckLinks(["close"]);

        getCategoryPosts();
        async function getCategoryPosts(){
            const fetchData = await fetch(`${NODESERVER}/api/blogsbycategory/${category}`);
            const blogData = await fetchData.json();
           setLoaderActive(false);
            setBlogCategoryPosts(blogData);
        }
    }, []);

    return(
    <>
        <div id="pageID" data-id="blog"></div>
        <section id="blogCategoryHero" className={category}>
            <img src={`/img/categoryheros/${category}.jpg`} alt="Hero Image" className="hero-img" />
            <div className="center">
                <h1 style={{border: "none"}} className="title"><span>{categoryTitle}</span></h1>
            </div>
            <h3 className="desc">{categoryDesc}</h3>
            <div className="shader"></div>
        </section>
        <section id="blogCategoryPosts">
            {loaderActive && <LoaderAnim />}
            {blogCategoryComponents}
        </section>
    </>
    )
}