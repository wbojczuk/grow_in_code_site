import React from "react";
import { Link } from "react-router-dom";

export default function LatestBlog(props){

    const [title, setTitle] = React.useState("");
    const [date, setDate] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [blogId, setBlogId] = React.useState("");

    React.useEffect(()=>{
         getData();
         async function getData(){
            const fetchData = await fetch(`${NODESERVER}/api/latestblogs/1`);
            const jsonBlogData = await fetchData.json();

            setBlogId(jsonBlogData[0]._id);
            setDescription(jsonBlogData[0].metadata.description);
            setTitle(jsonBlogData[0].metadata.title);

            const monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"
                                ];
            const currentDate = new Date(parseInt(jsonBlogData[0]._id));
            setDate(`- ${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`);
         }
    }, []);

    return(
        <Link to={`/blogviewer?id=${blogId}`} id="latestBlogCard">
            <div className="content">
                <div className="title">{title}</div>
                <div className="date">{date}</div>
                <div className="desc">{description}</div>
            </div>
        </Link>
    )
}