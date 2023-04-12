import React from "react";
export default function Footer(){
    return(
    <footer>
        {/* <div className="title">Grow In Code</div> */}

        <div className="socials">
            <div className="title">Socials</div>
            <div className="social-icons">
                <a className="youtube" href="https://www.youtube.com/channel/UCKuVsmlR9mRSAatMjgqhsSQ" target="_blank"></a>
                <a className="twitter" href="https://twitter.com/growincode" target="_blank"></a>
                <a className="instagram" href="https://www.instagram.com/growincode/" target="_blank"></a>
            </div>
        </div>

        <div className="contact">
        <div className="title">Contact</div>
        <div className="contact-items">
            <a href="mailto:williambojczuk@gmail.com" target="_blank">williambojczuk@gmail.com</a>
            <a href="https://williambojczuk.dev" target="_blank">williambojczuk.dev</a>
        </div>
        </div>
    </footer>
    )
}