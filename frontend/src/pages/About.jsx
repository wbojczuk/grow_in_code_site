import React from "react";

export default function About(props){
    React.useEffect(()=>{
        props.setCheckLinks(["close"])
    }, [])
    return(
        <>
            <div id="pageID" data-id="about"></div>
        </>
    )
}