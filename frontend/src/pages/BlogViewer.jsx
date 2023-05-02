import React from "react";
import { Link } from "react-router-dom";
import LoaderAnim from "../components/LoaderAnim";
export default function BlogViewer(props){

    const [loaderActive, setLoaderActive] = React.useState(true);
    const contentRef = React.useRef();
    const [title, setTitle] = React.useState("");
    const [date, setDate] = React.useState("");
    const [author, setAuthor] = React.useState("");

    React.useEffect(()=>{
        window.scrollTo(0,0);
        props.setCheckLinks(["close"])

        const currentID = (props.id) ? props.id : (jsdev.GETValues()).id;
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
            setAuthor("By William Bojczuk");
            contentRef.current.innerHTML = contentData;
            Prism.highlightAll();
        }

    }, [])


    return(
        <>
        <div id="pageID" data-id="blog"></div>
        <div id="blogViewerContainer">
            {loaderActive && <LoaderAnim />}
            <div className="title">{title}</div>
            <div className="date">{date}</div>
            <div className="author">{author}</div>
            <div className="content" ref={contentRef}></div>
        </div>
        </>
    )
}