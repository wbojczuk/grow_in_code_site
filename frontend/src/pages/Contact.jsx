import React from "react";
import BlogViewer from "./BlogViewer";
import titlechanger from "../js/titlechanger";

export default function Contact(props){
    React.useEffect(()=>{
        titlechanger("Contact", "Grow In Code")
        window.scrollTo(0,0);
        props.setCheckLinks(["close"])

    }, [])
    return(
        <>
            <div id="pageID" data-id="about"></div>
            {/* notitle={true} */}
            <BlogViewer changeTitle={true} setCheckLinks={props.setCheckLinks} id={1683562871832}/>
        </>
    )
}