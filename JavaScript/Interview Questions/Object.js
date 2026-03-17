//! Objects in Javascript - Function Constructors and ES6 Class

//? Object Literals {}
// const person = {
//     fname : "vinay",
//     lname : "toppo",
//     contact : "9999999999",
//     getfullname:function(){
//         console.log("Vinay")
//     }
// }

// const person2 = {
//     fname : "vikas",
//     lname : "Kumar",
//     contact : "9999999999",
//     getfullname:function(){
//         console.log("Vikas")
//     }
// }
// console.log(person2)

//* Advantage 
// *simple 
//* this does not act as a blue print 


//? Constructor Function 
//* base Blue Print 
//* Object Constructor Help 

// function Person(fname,lname,contact){
//     this.fname = fname,
//     this.lname = lname,
//     this.contact = contact
//     this.getName = function(){
//         console.log(`${this.fname}${this.lname}`)
//     }
// }

// const person1 = new Person("vinay","toppo",99999999999)
// const person2 = new Person("vikas","kumar","4574757458")
// const person3 = new Person("vijay","Rai","7474574438")


// person1.getName()
// console.log(person1.contact)
// console.log(person3)




//? Befoure Es6
// {}
// Function Constructor 

// After Es6 
// class keyword

// class Person{
//     constructor(fname,lname,contact){
//         this.fname = fname,
//         this.lname = lname
//         this.contact = contact
//     }

//     // Helper Functions / Methods 
//     getContact(){
//        console.log(this.contact)
//     }
//     getName(){
//         console.log(`${this.fname} ${this.lname}`)
//     }
// }
// const person1 = new Person("vikas","Kumar",45747547574)
// person1.getName()




//! Prototypes & Prototypal Inheritance
// const p1 = {
//     fname : "vinay",
//     lname : "toppo",
//     getFullname:function(){
//         return `${this.fname} ${this.lname}`
//     }
// }
// // console.log(p1.getFullname())

// const p2 = Object.create(p1)
// console.log("p1 is",p1.fname)
// p2.__proto__.fname = "Hack"
// console.log("p1 After",p1.fname)




// let fname = "vinay"
// console.log(fname.__proto__)

// let num = 100
// console.log(num.__proto__)

// const p1 = {
//     xp1 : "I am inside P1"
// }
// const p2 = {
//     xp2 : "I am inside P2",
//     __proto__:p1
// }
// const p3 = {
//     xp3 : "I am inside P3",
//     __proto__:p2
// }
// console.log(p3.xp1)


// let name = "vinay"
// console.log(name.__proto__)

// let num = 100


// class Student{
//     constructor(fname){
//         this.fname = fname
//     }
//     getName(){
//         // return this.fname
//         return "this is getfuncrion"
//     }
//     sayHello(){
//         console.log("Hell World")
//     }
// }
// const s1 = new Student("vinay")
// const s2 = {__proto__: Student.prototype}


