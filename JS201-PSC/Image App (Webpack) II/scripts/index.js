// link=https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=ZyXd7v4Aub3yH_-Ym7wVkTxQYvfSczbJNzTta3_0MnM

// link="https://api.unsplash.com/search/photos/?query=cat&per_page=20&client_id=ZyXd7v4Aub3yH_-Ym7wVkTxQYvfSczbJNzTta3_0MnM"

const API="ZyXd7v4Aub3yH_-Ym7wVkTxQYvfSczbJNzTta3_0MnM"

// Nvabar import and append//

import {navbar} from "../components/navbar.js";

let nav=document.getElementById("navbar")

nav.innerHTML=navbar();

// we create search button like things//  AND IN THIS WE EXPORT FETCH DATA

import {searchImages,append} from "./fetch.js"

let search = async (e) => {
    if(e.key === "Enter")
    {
        let value=document.getElementById("query").value;
       let  data= await  searchImages(API,value);
        console.log(data)

        //append part
        let container=document.getElementById("container");
        container.innerHTML=null
        append(data.results,container);
    }
};
document.getElementById("query").addEventListener("keydown",search);


let categories=document.getElementById("categories").children;



async function cotgrySearch() {
    console.log(this.id)
    let  data= await  searchImages(API,this.id);
    console.log(data)

    //append part
    let container=document.getElementById("container");
    container.innerHTML=null
    append(data.results,container);
}

// we array of obj ,for search partculr things ,you can also use for each
for(let el of categories){
    el.addEventListener("click",cotgrySearch)
    }

///<<<<<<<<<<<<<<<Noww we have to fetch the data  ,WE HAVE FETCH IN SAME PAGE DONE >>>>>>>>>>>>>>>>>>>>>>>>

// let searchImages =async () =>{

//     let value=document.getElementById("query").value;
//     try{

//         let res= await fetch(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`);

//          let data= await res.json();

//         console.log(data)
//      }
//     catch(err){
//       console.log(err)
//     }
// };


//





//async function myfilter() {

    let myfilter =async () =>{

       
       //let value=document.getElementById("popular").value;
         try{
     
             let res= await fetch(`https://api.unsplash.com/search/photos/?query=cat&per_page=20&order_by=popular&client_id=ZyXd7v4Aub3yH_-Ym7wVkTxQYvfSczbJNzTta3_0MnM`);
     
              let data= await res.json();
     
            console.log(data.results)
            return data.results;
          }
         catch(err){
           console.log(err)
         }
     
    //append part
    let container=document.getElementById("container");
    container.innerHTML=null
    append(data,container);
}

// we array of obj ,for search partculr things ,you can also use for each

let filterB=document.getElementById("filterB")

filterB.addEventListener("click", myfilter)

   



