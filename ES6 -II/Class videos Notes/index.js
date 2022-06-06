
// >>>>>>>>>>>>>>>> OLD METHOD >>>>>>>>>>>>>>>>>

// function Person(n){
//     this.name=n;
  
// }

// Person.prototype.print=function(){
//     console.log(this.name)
// }

// let p1= new Person("sanjay")
// console.log(p1)



// >>>>>>>>>>>>>>>>>>>>>>>> New Syntax  >>>>>>>>>>>>>>>>>>>>>>>>>

// class Person{
//     constructor(n){
        
//         this.name =n;
//         this.print=function(){
//             console.log(this.name)
//         }
//     }
// }

// let p1= new Person("Shivang Kumar")
// console.log(p1)




// ........................ Same Code But clean to other.........


// class Person{
//     constructor(n){
        
//         this.name =n;
       
//     }

//     print(){
//         console.log(this.name)       // protptype is replace by this function
//     }
// }

// let p1= new Person("Shivang Kumar")
// console.log(p1)


// >>>>>>>>>>>>>>>>>>>>>>>>>>            <<<<<<<<<<<<<<<<<<


// 1) Functional Programing

// let str="Pizza"

// function pizza(){
//     return "Pizza"
// }
// let str =pizza()

//Append

// let div = create('div');

// function create(n) {
//   return document.createElement(n);
// }


// 2)object Oriented Programing

// let recepie = {
//   items: ["butter", "paneer"],
//   cook: function () {
//     console.log(`cooking ${this.items[0]} ${this.items[1]}`);
//   },
// };

// recepie.cook();

// function items() {
//   return ["Butter", "Paneer"];
// }

// function cook() {
//   let i = items();
//   console.log(`cooking ${i[0]} ${i[1]}`);
// }

// cook();





//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> WE  ASSIGNMANET<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//STACK :- LENGTH,PUSH,POP,PEEK

// class Stack{

//     constructor(){
//         this.length=0;
//         this.stack=[];
//     }
//     push(el){
//         this.stack[this.length] =el;
//         this.length++
//     }
//     pop(){
//         this.stack.pop();
//         this.length--
//     }
//     peek(){
//         return this.stack[this.length-1]
//     }
// }

// let s1=new Stack()
// s1.push(1)
// s1.push(2)
// s1.push(10)

// console.log(s1)
// console.log(s1.peek())
// s1.pop()
// console.log(s1)




// >>>>>>>>>>>>>>>>>>>>>>>> INHERITANCE  <<<<<<<<<<<<<<<<<<<<<<<<<<<

class Mobile{                  //blueprint

    constructor(b,bt){
        this.brand=b;
        this.calling =true;
        this.battery =bt

      }
}

let m1=new Mobile("Samsung","8000")

console.log(m1)


class Smartphone{                  //blueprint

    constructor(b,bt,c,s){
        this.brand=b;
        this.calling =true;
        this.battery =bt
        this.camera=c;
        this.screen=s;

      }
}
let m2 =new Smartphone("samxung",5000,"20px","6inch")

console.log(m2)

// function constructor(a,b){
//     let A = a;
//     let B = b;
// }

// constructor(a,b);


// ...................... use Extense and super (in this things it stop write repeting things).......................


class Newsmartphone  extends Mobile{                  //blueprint

    constructor(b,bt,c,s){

        super(b,bt)
        this.camera=c;
        this.screen=s;

      }
}
let m3 =new Smartphone("Lenovo",6000,"200px","8inch")

console.log(m3)





