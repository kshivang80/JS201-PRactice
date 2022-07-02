// Add the coffee to local storage with key "coffee"

let url="https://masai-mock-api.herokuapp.com/coffee/menu"

async function  myFunction(){

 try{
    let res=await fetch(url)
    let data=await res.json()
     data=data.menu.data
     myAppend(data)
    console.log(data)
 }
 catch(err){
    console.log(err)
    console.log("Error")
 }

   
}
myFunction()


function myAppend(data){
    
    let menu=document.getElementById("menu")

  data.forEach(function(el){


    let div=document.createElement("div")

    let image=document.createElement("img")
    image.src=el.image

    let title=document.createElement("h2")
    title.innerText=el.title

    let price=document.createElement("h3")
    price.innerText=el.price

    let btn=document.createElement("button")
    btn.innerText="Add To Bucket "
    btn.setAttribute("id","add_to_bucket")
    btn.addEventListener("click",function(){

        addToCart(el, price.innerText)
    })
    

    div.append(image,title,price,btn)
    menu.append(div)
  })

   
}

let arr=JSON.parse(localStorage.getItem("coffee"))||[]

let coffee_count=document.getElementById("coffee_count")

let count=document.createElement("h1")
count.innerHTML=arr.length

coffee_count.append(count)

function addToCart(el,price)
{
  
    console.log(price)
    let obj={
         image:el.image,
         title:el.title,
         price:el.price,
        
    }
    console.log(obj)
   arr.push(obj)

   localStorage.setItem("coffee",JSON.stringify(arr));
   window.location.reload();
   
}