const key ="AIzaSyCxS3mjhc-rIHBFPLBjLmOUoFUkHrY4Y1Y";

let data=   JSON.parse(localStorage.getItem("video"))
let search =async () =>{
    try{
        let input=document.getElementById("search").value;
        console.log("input",input)
        let url =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&key=${key}`
       
        let res =await fetch(url);
        let data =await res.json();
       /// console.log(data.items)
       dispayData(data.items)
    }
    catch{
        console.log("error")
    }
}

let search2 =async () =>{
    try{
        // let input=document.getElementById("search").value;
        // console.log("input",input)
    //    https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&key=AIzaSyCxS3mjhc-rIHBFPLBjLmOUoFUkHrY4Y1Y

        let url ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&locale=India&maxResults=20&regionCode=IN&key=AIzaSyCxS3mjhc-rIHBFPLBjLmOUoFUkHrY4Y1Y"
        let res =await fetch(url);
        let data1 =await res.json();
       // console.log(data1)
        dispayData(data1.items)
    }
    catch{
        console.log("error")
    }
}

let cont=document.querySelector("#videos");
let dispayData=(data)=>{
    console.log(data)
    cont.innerHTML="";
    data.forEach(({id,snippet}) => {
        console.log(id,snippet)
        // let iframe=document.createElement("iframe");
        let img=document.createElement("img");
        let title=document.createElement("p");
        // iframe.src=`https://www.youtube.com/embed/2vNVGZGlUok`;
        img.src=snippet.thumbnails.high.url
        title.innerText=snippet.title
        let div =document.createElement("div");
        div.addEventListener("click",function(){
                localStorage.setItem("id",JSON.stringify(id.videoId));
                window.location.href="play.html"
                //show(el)
                
        })
        div.append(img,title);
        cont.append(div)
        
    })

}

// console.log(search())
search2()

// function show(el){
//         localStorage.setItem("video",JSON.stringify(el))
// }