import { sideBar } from "../components/sidebar.js";

let sidebar = document.getElementById("side_bar");
sidebar.innerHTML = sideBar();

let user = JSON.parse(localStorage.getItem("user"));

let container = document.getElementById("news_result");

let query = user[0].country;

let getData = async (query) => {
  let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`;

  try {
    let res = await fetch(url);
    let data = await res.json();

    // console.log(data.articles);
    appendData(data.articles);
  } catch (error) {
    console.log(error);
  }
};

getData(query);

function appendData(data) {
  container.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "news");

    let img = document.createElement("img");
    img.src = el.urlToImage;

    let title = document.createElement("h3");
    title.innerText = el.title;

    let author = document.createElement("p");
    author.innerText = el.author;

    div.addEventListener("click", () => {
      redirect(el);
    });

    div.append(img, title, author);

    container.append(div);
  });
}

function sCountry() {
  let country = document.getElementById("country").children;

  for (let c of country) {
    c.addEventListener("click", newsSearch);
  }
}

function newsSearch() {
  getData(this.id);
}

function redirect(el) {
  localStorage.setItem("news", JSON.stringify(el));

  window.location.href = "news.html";
}

sCountry();

let searchBox = document.getElementById("search_box");

let searchData = async (e, query) => {
  let searchQuery = searchBox.value.toLowerCase();
  if (searchQuery === "twitter" || searchQuery === "tesla") {
    if (e.key === "Enter") {
      let url = `https://masai-mock-api.herokuapp.com/news?q=${searchQuery}`;

      try {
        let res = await fetch(url);
        let data = await res.json();

        // console.log(data.articles);
        appendData(data.articles);
      } catch (error) {
        console.log(error);
      }
    }
  }
};

searchBox.addEventListener("keydown", searchData);
