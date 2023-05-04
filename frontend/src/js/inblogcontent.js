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
}