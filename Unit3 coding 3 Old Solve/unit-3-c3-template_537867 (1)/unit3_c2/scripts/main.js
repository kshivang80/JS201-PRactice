
let sub=document.getElementById("submit")

let mySubmit=()=>{

    event.preventDefault()
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let amount = document.getElementById("amount").value;


    let user={
        name:name,
        email:email,
        address:address,
        amount:amount,

    }

  localStorage.setItem("user",JSON.stringify(user));
    


    document.getElementById("name").value = null;
    document.getElementById("email").value = null;
    document.getElementById("address").value = null;
    document.getElementById("amount").value = null;
}

sub.addEventListener("click", mySubmit);