



// constructor functions

function Person(n,a){
    this.name=n
    this.age=a
}

Person.prototype.city='pune'   // when we want to add more property use prototype

const per1=new Person('raj',24)

console.log('par1',per1)

