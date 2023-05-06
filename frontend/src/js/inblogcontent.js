// TO INJECT OTHER ELEMS
export default function inblogcontent(){

    if(document.getElementById("followMeEverywhere")){
        
        document.getElementById("followMeEverywhere").insertAdjacentHTML("beforeend", `
                <div class="title">Follow Me Everywhere!</div>
                <div id="followMeEverywhereIcons">
                    <a target="_blank" href="https://www.instagram.com/growincode" class="icons instagram"></a>
                    <a target="_blank" href="https://twitter.com/growincode" class="icons twitter"></a>
                    <a target="_blank" href="https://www.youtube.com/@growincode" class="icons youtube"></a>
                </div>
        `);
    }

    if(document.getElementById("faqWrapper")){
        document.getElementById("faqWrapper").insertAdjacentHTML("beforeend", `
        <div class="title">FAQ</div>
        <ul id="faqList">
            <li>
                <div>What's My Favorite Coding Language?</div>
                <span>I don't have one. But if I did, it would most likely be JavaScript simply because of its flexibility.</span>
            </li>
            <li>
                <div>Can We Work Together?</div>
                <span>If it's a blog post, I'll write posts for other publications from time to time. If it's on a project, it really all depends. Contact me with more details.</span>
            </li>
            <li>
                <div>What keyboard do I recommend?</div>
                <span>I've used enough keyboards to realize that even a basic Dell keyboard works fine for coding. But at the moment my preference is the <a href="https://www.cherryamericas.com/mx-board-1-0" target="_blank">Cherry MX Silent Keyboard</a>.</span>
            </li>
            <li>
                <div>How is this blog built?</div>
                <span>This is a project of mine which I built from the ground up. The frontend is made from <a href="https://react.dev/" target="_blank">React<a>, <a href="https://reactrouter.com/en/main" target="_blank">react-router-dom</a>, and <a href="https://greensock.com/gsap/" target="_blank">GSAP</a>. While the backend consists of mainly <a href="https://nodejs.org/en" target="_blank">NodeJS</a>, <a href="https://expressjs.com/" target="_blank">ExpressJS</a>, and <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>.</span>
            </li>
        </ul>
    `);

    // LISTENERS
    const faqListsDiv = document.querySelectorAll("#faqList li div");
    const faqLists = document.querySelectorAll("#faqList li");

    const faqListState = {
        mouseOver: false,
        listOpen: false
    };
    faqLists.forEach((list)=>{
        list.addEventListener("mouseenter", ()=>{faqListState.mouseOver = true;})
        list.addEventListener("mouseleave", ()=>{faqListState.mouseOver = false;})
    })
    window.addEventListener("click", ()=>{
       if(!faqListState.mouseOver && faqListState.listOpen){
            closeFAQLists();
       }
    });

    faqListsDiv.forEach((list)=>{
        list.addEventListener("click", expandFAQList);
    });

    function closeFAQLists(){
        faqLists.forEach((list)=>{
            list.classList.remove("active");
        })
        faqListState.listOpen = false;
    }

    function expandFAQList(evt){
        let isActive = false;
        if((evt.currentTarget.parentElement).classList.contains("active")){
            isActive = true;
        }
        closeFAQLists();
        if(!isActive){
            evt.currentTarget.parentElement.classList.add("active");
            faqListState.listOpen = true;
        }
    }

    }

    
}