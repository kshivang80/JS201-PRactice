
let user=JSON.parse(localStorage.getItem("user"))

let purchase_Voucher=document.getElementById("purchased_vouchers")


let h3 = document.getElementById("wallet_balance");
h3.innerText = `${user.amount}`;

let purchase = JSON.parse(localStorage.getItem("purchase"));

let append = () => {
    purchase.forEach((el) => {
      let div = document.createElement("div");
  
      let img = document.createElement("img");
      img.src = el.image;
  
      let name = document.createElement("p");
      name.innerText = el.name;
  
      let price = document.createElement("h3");
      price.innerText = el.price;
  
      div.append(img,name,price);
      purchase_Voucher.append(div);
    });
  };
  
  append();