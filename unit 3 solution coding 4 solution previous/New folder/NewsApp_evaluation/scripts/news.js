import {sideBar} from "../components/sidebar.js";

let container = document.getElementById('detailed_news');

let sidebar = document.getElementById('side_bar');
sidebar.innerHTML = sideBar();

let news = JSON.parse(localStorage.getItem('news'));

function appendData(){
    let img = document.createElement("img");
    img.src = news.urlToImage;

    let title = document.createElement("h3");
    title.innerText = news.title;

    let desc = document.createElement('h4');
    desc.innerText = news.description;

    container.append(img,title,desc);
}

appendData();