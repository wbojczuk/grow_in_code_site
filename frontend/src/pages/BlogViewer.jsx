import React from "react";
export default function BlogViewer(props){
    React.useEffect(()=>{
        props.setCheckLinks(["close"])
    }, [])
    return(
        <h1>Blog Viewer</h1>
    )
}