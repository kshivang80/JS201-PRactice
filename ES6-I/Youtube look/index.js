var menuIcon=document.querySelector(".menu-icon")
var sidebar = document.querySelector(".sidebar")
var containerBig = document.querySelector(".containerBig")


menuIcon.onclick=function(){
    sidebar.classList.toggle("small-sidebar")
    containerBig.classList.toggle("large-containerBig")
}







// >>>>>>>>>>>>>>>>>>>>>>  main<<<<<<<<<<<<<<<<<<<<<<<<<<<
// function part of youtube videos 



// Youtube API Key

let api_key="AIzaSyD1NPCoEBmRb-29oZukdIyKl7CitZM2Ke8"

// Youtub Url
 let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`


// fetch(url)
// .then(function(res){
//     return res.json()
// })
// .then(function(res){
//     console.log(res)
// })

//let newmoviedata=

let  search = async () => {
   
    try{
           
            let query=document.getElementById("query").value
            let url =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`
            let res= await fetch(url);

            let data= await res.json()

            append(data.items)

           // console.log(data.items)
    }  
    catch(err){

    console.log(err);
    }
   
    
}

//append the data on dom

let append= (data) =>{

    let container =document.getElementById("container");

    container.innerHTML=""

    //data.forEach((el) =>{el.id.videoId/ el.snippet.title}{
       data.forEach(({id:{videoId},snippet:{title}}) =>{

        // console.log(videoId)
        // console.log(title)

      

        let iframe=document.createElement("iframe")
        iframe.src=`https://www.youtube.com/embed/${videoId}`
        iframe.allow="fullscreen"

        let h3 =document.createElement("h3")
        h3.innerText=title;

        let div =document.createElement("div")
        div.addEventListener("click",function(){
           
            // localStorage.setItem("id",JSON.stringify(videoId))
            //   window.location.href="video.html"
            ShowMovies()
        })

        
        
        div.append(iframe,h3)
        container.append(div)

       




     })
    
}

//show in other paper

function ShowMovies(videoId){
    localStorage.setItem("video",JSON.stringify(videoId))

    console.log(videoId)
    window.location.href="showMovie.html"
}

// let playVideo =(video) =>{

//     console.log(video)
//   // window.location.href="video.html"
//    localStorage.setItem("video",JSON.stringify(video))
    
   
// }





/*
<iframe width="560" 
height="315" 
src="https://www.youtube.com/embed/iLWTnMzWtj4"
title="YouTube video player"
frameborder="0"
allow="accelerometer;
autoplay; clipboard-write;
encrypted-media; gyroscope;
picture-in-picture" allowfullscreen></iframe>

*/