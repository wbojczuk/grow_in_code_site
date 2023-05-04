import React from "react";
import "../../css/blogviewer/socialshare.css";

export default function SocialShare(props){

    const [twitterLink, setTwitterLink] = React.useState("");
    const [facebookLink, setFacebookLink] = React.useState("");
    const [linkedinLink, setLinkedinLink] = React.useState("");

    // SET LINKS
    React.useEffect(()=>{
        const windowURI = encodeURIComponent(window.location.href);

        setTwitterLink(`https://twitter.com/intent/tweet?text=${encodeURIComponent(props.description)}&url=${windowURI}`);

        setLinkedinLink(`https://www.linkedin.com/shareArticle?mini=true&url=${windowURI}&title=${encodeURIComponent(props.title)}&source=www.growincode.com&summary=${encodeURIComponent(props.description)}`);

        setFacebookLink(`https://www.facebook.com/sharer/sharer.php?u=${windowURI}%2F&amp;src=sdkpreparse`);

    },[props.description])

    return(
        <div id="socialShareContainer">
            <a href={facebookLink} target="_blank" className="social-share-button facebook"></a>
            <a href={linkedinLink} target="_blank" className="social-share-button linkedin"></a>
            <a href={twitterLink} target="_blank" className="social-share-button twitter"></a>
        </div>
    )
}