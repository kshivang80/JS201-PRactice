/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

let form = document.getElementById('user-form');

let submit = document.getElementById('submit');

let user = [];

let userDetails = () => {
    let obj = {
    image : document.getElementById('user_pic').value,
    name : document.getElementById('user_name').value,
    email : document.getElementById('user_email').value,
    country : document.getElementById('user_country').value,
    }

    user.push(obj);

    localStorage.setItem('user',JSON.stringify(user));

    document.getElementById('user_pic').value = null;
    document.getElementById('user_name').value = null;
    document.getElementById('user_email').value = null;

    // window.location.href = "worldNews.html";
}

submit.addEventListener('click',userDetails);