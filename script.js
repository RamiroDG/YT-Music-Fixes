/*Created by RamiroDG*/

let cover = document.querySelector("#song-image").children[0].children[0];
let div = document.querySelector("head > div");
let estilo = document.createElement("style");

//Set CSS to fix aspect size for fullscreen cover image
cover.style.objectFit="contain";
cover.style.backgroundColor="black";

//Sets CSS to fix aspect size of cover images in menu
estilo.appendChild(document.createTextNode(
    "yt-img-shadow[object-fit=COVER] img.yt-img-shadow {"+
    "object-fit: contain;"+
    "}"
    ));
div.appendChild(estilo);