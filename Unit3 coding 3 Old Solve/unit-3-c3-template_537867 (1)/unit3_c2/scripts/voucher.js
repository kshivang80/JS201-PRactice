let user=JSON.parse(localStorage.getItem("user"));
console.log(user)

let url="https://masai-vouchers-api.herokuapp.com/api/vouchers"

let arr=[]

let h3=document.getElementById("wallet_balance");
h3.innerText=`${user.amount}`


let voucher_data = async () =>{

    let res=await fetch(url);
    let data= await res.json();
    console.log(data[0].vouchers)
    append(data[0].vouchers)

} 

let append = (data) => {

    data.forEach((el)=>{

        let div=document.createElement("div")
        div.setAttribute("class","voucher");

        let img=document.createElement("img")
        img.src=el.image;

        let name=document.createElement("p")
        name.innerText=el.name;

        let price=document.createElement("h3")
        price.innerText=el.price;

       let button =document.createElement("button")
       button.setAttribute("class","buy_voucher")
       button.innerText="Buy"

       button.addEventListener("click", ()=>{
        
        saveData(el)
       })


       div.append(img,name,price,button)
       voucher_list.append(div)
       
})
 

}

voucher_data()


let saveData= (el)=>{

    if(user.amount > el.price)
    {
        arr.push(el)

        localStorage.setItem("purchase", JSON.stringify(arr));
        alert("Hurray! purchase successful");
    
        h3.innerText = "";
        h3.innerText = user.amount - el.price;
    
        user.amount -= el.price;
    
        localStorage.setItem("user", JSON.stringify(user));

    }
    else{
        alert("Sorry! insufficient balance");
    }

}
