//OOP vs functional

// Functional Example
// const grogu = {
//     name: 'Grogu',
//     age: 51
// }
//
// const din = {
//     name: 'Din Djarin',
//     age: 39
// }
//
// const boKatan = {
//     name: 'Bo-Katan Kryze',
//     age: 41
// }

// function sayHi(name){
//     console.log('Hi ' + name);
// }

// function getBirthYear (age){
//     return new Date().getFullYear()-age;
// }

// sayHi(grogu.name);
// console.log(grogu.name + ' was born in: '+ getBirthYear(grogu.age));

// sayHi(din.name);

// function sayHiBind(){
//     console.log('Hi ' + this.name);
// }

// function getBirthYearBind (){
//     return new Date().getFullYear()-this.age;
// }

// boKatan.sayHi = sayHiBind.bind(boKatan);
// boKatan.sayHi();

// boKatan.getBirthYear = getBirthYearBind.bind(boKatan)
// console.log(boKatan.getBirthYear());

//OOP Example

// const grogu = {
//     name: 'Grogu',
//     age: 51,
//     sayHi() {
//         console.log('Hi ' + this.name);
//     },
//     getBirthYearBind() {
//         return new Date().getFullYear() - this.age;
//     }
// }

// const din = {
//     name: 'Din Djarin',
//     age: 39,
//     sayHi() {
//         console.log('Hi ' + this.name);
//     },
//     getBirthYearBind() {
//         return new Date().getFullYear() - this.age;
//     }
// }

// const boKatan = {
//     name: 'Bo-Katan Kryze',
//     age: 41,
//     sayHi() {
//         console.log('Hi ' + this.name);
//     },
//     getBirthYearBind() {
//         return new Date().getFullYear() - this.age;
//     }
// }

// grogu.sayHi()
// console.log(grogu.getBirthYearBind())
//
// din.sayHi()
// console.log(din.getBirthYearBind())
//
// boKatan.sayHi()
// console.log(boKatan.getBirthYearBind())

// Prototype inheritance

// const person = {
//     name: 'Stranger',
//     age: 99,
//     sayHi(){
//         console.log('Hi ' + this.name);
//     }
// }

// const grogu = Object.create(person);
// grogu.name = 'Grogu';
// grogu.isHungry = true;
//
// console.log(grogu);
// console.log(grogu.name);
// console.log(grogu.age);
// grogu.sayHi();
//
// console.log(grogu.hasOwnProperty('name'));
// console.log(grogu.hasOwnProperty('isHungry'));
//
// console.log(Object.keys(grogu))
// console.log(Object.values(grogu))
// console.log(Object.entries(grogu))
//
// for (const key in grogu) {
//     console.log('key: ', key, 'isOwnProperty: ', grogu.hasOwnProperty(key));// barks
// }

// Class

// class Person{
//     name = 'Grogu';
//     age = 51;
// }
//
// const grogu = new Person();
// console.log(grogu);
// console.log(grogu.name);
// console.log(grogu.age);


// Class constructor
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     sayHi() {
//         console.log(`Hi ${this.name}!`);
//     }
//
//     getBirthYearBind() {
//         return new Date().getFullYear() - this.age;
//     }
// }

// const grogu = new Person('Grogu', 51);
//
// grogu.sayHi();
// console.log(grogu);
// console.log(grogu.getBirthYearBind());

//Class private props, get, set

// class Person {
//     #name;
//     #age;
//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }
//
//     get name(){
//         return this.#name;
//     }
//
//     set name(name){
//         this.#name = name;
//     }
//
//     get age(){
//         return this.#age;
//     }
//
//     set age(age){
//         if(Number.isInteger(age)) {
//             this.#age = age;
//         }else {
//             throw new Error('Age is not a number')
//         }
//     }
//
//     sayHi() {
//         console.log(`Hi ${this.name}!`);
//     }
//
//     getBirthYearBind() {
//         return new Date().getFullYear() - this.#age;
//     }
// }

// const grogu = new Person('Grogu', 51);
//
// console.log(grogu);
// grogu.age = 52;
// console.log(grogu);
//
// grogu.age = '62';

// Static property

// class Person {
//     #name;
//     #age;
//
//     static FAVORITE_FOOD = {
//         ROASTED_BEAST: 'ROASTED BEAST',
//         TROOPER_FINGER: 'TROOPER FINGER',
//         TENTACLE_CHOWDER: 'TENTACLE CHOWDER',
//         BLUE_SNACKS: 'BLUE SNACKS',
//         ICE_SPIDERS: 'ICE SPIDERS',
//         FROGS: 'FROGS'
//     }
//
//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }
//
//     feed(food){
//         console.log(`Feed ${this.#name} with ${food}`)
//     }
// }

// console.log(Person.FAVORITE_FOOD.ROASTED_BEAST)

// const grogu = new Person('Grogu', 51);
// grogu.feed(Person.FAVORITE_FOOD.FROGS);

// Inheritance

// class Person {
//     #name;
//     #age;
//
//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }
//
//     getBirthYearBind() {
//         return new Date().getFullYear() - this.#age;
//     }
// }

// const boKatan = new Person('Bo-Katan Kryze', 41);
// console.log(boKatan);

// class Mandalorian extends Person{
//
//     #hasEverRemovedHelmet = false;
//
//     constructor(name, age) {
//         super(name, age);
//     }
//
//     get hasEverRemovedHelmet(){
//         return this.#hasEverRemovedHelmet;
//     }
//
//     set hasEverRemovedHelmet(hasRemoved){
//         this.#hasEverRemovedHelmet = hasRemoved;
//     }
// }
//
// const boKatan = new Mandalorian('Bo-Katan Kryze', 41);
// console.log(boKatan);
// console.log(boKatan.getBirthYearBind())
// console.log(boKatan.hasEverRemovedHelmet)
// boKatan.hasEverRemovedHelmet = true;
// console.log(boKatan);