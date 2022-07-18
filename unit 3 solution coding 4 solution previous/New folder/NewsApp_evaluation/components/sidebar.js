let user = JSON.parse(localStorage.getItem("user"));
let img = user[0].image;
let name = user[0].name;
let email = user[0].email;
let country;

if(user[0].country ==='in'){
    country = "India";
}else if(user[0].country ==='nz'){
    country = "New Zealand";
}else if(user[0].country ==='us'){
    country = "USA";
}else if(user[0].country ==='uk'){
    country = "UK";
}else{
    country = "China";
}

function sideBar() {
  return `
    <img src = ${img} alt=user_pic>
    <h3>${name}</h3>
    <h4>${email}</h4>
    <h4>${country}<h4>
    `;
}

export { sideBar };
