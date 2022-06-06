

// function test(){
//     conaole.log("hello world")
// }

// let test= function(){
//     console.log("hello world")
// }

// let test = ()=>{
//     console.log("hello wolrd")
// }

// // Old method
// let arr=[1,2,3,4]

// arr.forEach(function(el){
//     console.log("el:",el)
// })

// // new method


// arr.forEach((el)=>{
//     console.log("el:",el)
// })

// object method

// const user ={
//     name:'raj',
//     age:'24',
//     city:'Pune'
// }

// // let name= user.name
// // let age= user.age

// //destructuring 

// let {name,city} =user
// console.log('name :',name,city)

// >>>>>>>How to fetch in way>>>>>>>>>>>

// fetch ("https://reqres.in/api/users/2")
// .then((res)=>{
//     return res.json()
// }).then((res)=>{

//     let data=res.data
//    let {first_name,email}= data

//    console.log("email :",email)
//    console.log("first_name :",first_name)

// })
// .catch((res)=>{
//     console.log(err)
// })


// let {name:anything,city}=user
// console.log('name',anything,city)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// const user ={
//     name:'raj',
//     age:'24',
//     city:'Pune'
// }

// function Print({name,age,city}){
//     console.log(name,age,city)
// }
// Print(user)


// >>>>>>>>>>>>>>>> SPREAD OPRAETOR>>>>>>>>>>>>>>>>>>>>>>

// let color1=["green","pink","red"]

// // if i want to add color1 to color2 then use [...and their name]

// let color2=[...color1,"Blue","orange","black"]

// console.log(color2)

// const user1={
//     name:"shivang kumar",
// }

// const city1={
//     city:"delhi"
// }

// let details={...user1,...city1}
// console.log(details)

// let str=["A",..."EID","U"]

// console.log(str)



// >>>>>>>>>>>>>>>>>>>>  REST >>>>>>>>>>>>>>>>>>>>>>>>>>

// It mean that usko chood kar sab lei

// const user={
//        name:"shivang kumar",
//        city:"delhi",
//        age:21,
//        role:"FSWD"
// }

// // name ko chod kar sab obj me lei aaoo
// const {name,...X}=user
// console.log(X)


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// this is very usefull without using loop it sum up

// function Newarr(...a){
// console.log(a)

// let sum=0
// for(let num of a){
//     sum+=num
// }
// console.log("Total :",sum)

// }


// Newarr(10,20,30)



// which things we learned  in this class

//let,const
//arrow function
//destructiuring
//for of
//spread,rest


