// On clicking remove button the item should be removed from DOM as well as localstorage.

let arr=JSON.parse(localStorage.getItem("coffee"))||[]
 console.log(arr)

 // .........countion total amount...................



 let total_amount=document.getElementById("total_amount")

 let total=0
 if(arr===null)
 {
    total_amount.innerHTML=0;
 }
 else{
    arr.forEach(function(el){
        total=total+Number(el.price)
    })
 }

 total_amount.innerText=total;

function myNewdata(){
    //console.log(arr)
    let bucket=document.getElementById("bucket")
    arr.forEach(function(el,index){

        let div=document.createElement("div")

        let image=document.createElement("img")
        image.src=el.image

        let title=document.createElement("h2")
        title.innerText=el.title

        let price=document.createElement("h3")
        price.innerText=el.price

        let btn=document.createElement("button")
        btn.setAttribute("id","remove_coffee")
        btn.innerText="Remove Coffee"

        btn.addEventListener("click",function(){
            deleteItem(el,index)
        })

      div.append(image,title,price,btn)
      bucket.append(div)
    })
   
}
myNewdata()


function deleteItem(el,index){
    arr.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(arr))

    window.location.reload()
}

//.......second method of delete..///////

// function deleteItem(el){
//     let modified = arr.filter(element => {
//         return element !== el;
//     })

//     localStorage.setItem("coffee",JSON.stringify(modified));
//     window.location.reload();
// }


////////////// Rediect to checkout page...///////////


function myCheckout(){
    window.location.href = "checkout.html";
    
}
