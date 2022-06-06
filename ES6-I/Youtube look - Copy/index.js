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

            //console.log(data.items)
    }  
    catch(err){

    console.log(err);
    }
   
    
}
// tranding data videos  page 
let search2 =async () =>{
    try{
       

        let url ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&locale=India&maxResults=20&regionCode=IN&key=AIzaSyD1NPCoEBmRb-29oZukdIyKl7CitZM2Ke8"
        let res =await fetch(url);
        let data1 =await res.json();
        console.log(data1)
        append(data1.items)
    }
    catch{
        console.log("error")
    }
}

//append the data on dom
let container =document.getElementById("container");
let append= (data) =>{

    container.innerHTML=""
    data.forEach(({id,snippet}) => {
       // console.log(id,snippet)
      
        let image=document.createElement("img");
        image.src=snippet.thumbnails.high.url

        let title=document.createElement("h3");
        title.innerText=snippet.title
       
        let box =document.createElement("div");
        box.addEventListener("click",function(){
                localStorage.setItem("id",JSON.stringify(id));
                window.location.href="showMovie.html"
                
        })
        box.append(image,title);
        container.append(box)
        
    })

    
}
search2()

//show in other paper



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