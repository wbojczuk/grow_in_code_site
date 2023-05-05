import React from "react";
import { Link, useParams } from "react-router-dom";

import inblogcontent from "../js/inblogcontent";
import "../css/blogviewer/followme.css";

import Tags from "../components/blogviewer/Tags";
import LoaderAnim from "../components/LoaderAnim";
import SocialShare from "../components/blogviewer/SocialShare";
import SideNav from "../components/blogviewer/SideNav";
import embedNewsletter from "../js/newsletter";


export default function BlogViewer(props){

    const [loaderActive, setLoaderActive] = React.useState(true);
    const contentRef = React.useRef();
    const [title, setTitle] = React.useState("");
    const [date, setDate] = React.useState("");
    const [author, setAuthor] = React.useState("");
    const [tags, setTags] = React.useState([]);

    const [description, setDescription] = React.useState("");

    const params = useParams();



    React.useEffect(()=>{
        window.scrollTo(0,0);
        props.setCheckLinks(["close"]);

        // SET STATES TO INITIAL VALUE
        setLoaderActive(true);
        setTitle("");
        setAuthor("");
        setTags([]);
        setDate("");
        contentRef.current.innerHTML = "";
    
        const currentID = (props.id) ? props.id : params.blogid;

        // Gets data From the Blog API
        getData();
        async function getData(){
            const fetchBlogData = await fetch(`${NODESERVER}/api/blogbyid/${currentID}`);
            const jsonBlogData = await fetchBlogData.json();
            const contentData = jsonBlogData.content;
            const blogData =  jsonBlogData.metadata;

            // Create Date String
            const monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"
                                ];
            const currentDate = new Date(parseInt(jsonBlogData._id));

            setLoaderActive(false);
            if(!props.notitle){
                setTitle(blogData.title);
            }
            setDate(`- ${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`);
            setAuthor("William Bojczuk");
            setTags(blogData.tags);
            setDescription(blogData.description);

            contentRef.current.innerHTML = contentData;
            inblogcontent();
            
            embedNewsletter();
            Prism.highlightAll();
        }

    }, [params.blogid]);



    return(
        <>
        <div id="pageID" data-id="blog"></div>
        
            <div id="blogViewerContainer">

                {loaderActive && <LoaderAnim />}

                {(!loaderActive) &&
                <>
                    <div className="title">{title}</div>
                    <SocialShare title={title} description={description}/>

                    <div className="date">{date}</div>
                    
                    <div className="author">By: <Link to="/about">{author}</Link></div>
                </>
                }

                <div className="content" ref={contentRef}></div>

                {(tags.length > 0) && <Tags tags={tags}/>}
            </div>

            {(window.matchMedia("(min-width: 751px)").matches) && <SideNav />}
        </>
    )
}