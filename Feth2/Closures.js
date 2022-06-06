// accpect input
//fetch the data
//append data

let  movies_div=document.getElementById("movies")

async function searchMovies(q){

    try{
    let  url=`https://www.omdbapi.com/?t=${q}&apikey=d5c826c7`;
   
    let res= await fetch(url)

    let data =await res.json()  //res.json mean res.cpllect 

    return data.Search; 
    } catch(error){
        console.log("error",error)
    }
    //console.log(data);

}

function appendMovies(movies){
    movies_div.innerHTML=null;

    if(movies ===undefined)
    {
        return false;
    }
    movies.forEach(function(el){
        let p=document.createElement("p")

        p.innerText=el.Title;
        movies_div.appped(p)
    })
}



async function main(){
    let query=document.getElementById("query").value;
    //console.log("query",query)

    let response=  searchMovies(query) // who retuen the promise
      let data= await response ;  //serchMovies is returning
      //console.log("data",data)
      appendMovies(data)
      console.log(data)
}