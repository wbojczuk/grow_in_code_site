import React from "react";
import BlogViewer from "./BlogViewer";

export default function About(props){
    React.useEffect(()=>{
        window.scrollTo(0,0);
        props.setCheckLinks(["close"])
    }, [])
    return(
        <>
            <div id="pageID" data-id="about"></div>
            {/* notitle={true} */}
            <BlogViewer setCheckLinks={props.setCheckLinks} id={1681757364340}/>
        </>
    )
}

// ADD STUFF FOR qAndAContainer