const api_key="da9c8f71c890f5299e8647020671fdba"

//https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={Api key}

 async function getData(){
    let city=document.getElementById("city").value
    
    //destination

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

// car
let res =await fetch(url)
 let data=await res.json();
 append(data)
 
 console.log(data)

// fetch(url)
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(res){
//         //displayMovie(res)
//         console.log(res)
//     })
//     .catch(function(err){
//        // console.log(err)
//         displayError(err)
//     })
}


function append(data){
  
    let Container=document.getElementById("Container")
    Container.innerHTML=null
    let box=document.createElement("div")

    let name=document.createElement("h3")
    name.innerText=data.name

    let Temp=document.createElement("h4")
    Temp.innerText=`Current temp: ${data.main.temp}`

    let Tempmax=document.createElement("h4")
    Tempmax.innerText=`Maxmium temp: ${data.main.temp_max}`

    let Tempmin=document.createElement("h4")
    Tempmin.innerText=`Minumum temp: ${data.main.temp_min}`

box.append(name,Temp,Tempmax,Tempmin)
Container.append(box)


 let iframe=document.getElementById("gmap_canvas")   
 iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`  

    
}

// src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"


//BASED ON CURRENT LOCATION//

function getLocationWeather() {
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

     // getData(latitude,longitude)
      console.log(latitude);
      console.log(longitude);
    }
  }

  getLocationWeather()

