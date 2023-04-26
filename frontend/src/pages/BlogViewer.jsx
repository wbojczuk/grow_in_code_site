import React from "react";
import { Link } from "react-router-dom";
export default function BlogViewer(props){

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
            const fetchContentData = await fetch(`${NODESERVER}/api/blogcontent/${currentID}`);
            const contentData = await fetchContentData.text();
            const fetchBlogData = await fetch(`${NODESERVER}/api/blogs/id/${currentID}`);
            const blogData = await fetchBlogData.json();

            // Create Date String
            const monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"
                                ];
            
            const currentDate = new Date(parseInt(blogData.id));

            if(!props.notitle){
                setTitle(blogData.title);
            }
            setDate(`- ${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`);
            setAuthor("William Bojczuk");
            contentRef.current.innerHTML = contentData;
        }

    }, [])


    return(
        <div id="blogViewerContainer">
            <div className="title">{title}</div>
            <div className="date">{date}</div>
            <div className="author">By {author}</div>
            <div className="content" ref={contentRef}></div>
        </div>
    )
}