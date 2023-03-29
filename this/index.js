// "use strict";
//Run in node and in browser
// console.log('this', this)
//
// console.log(this.navigator);
// console.log(window.navigator);
//
// console.log(this.history);
// console.log(window.history);
//
// console.log('this.localStorage', this.localStorage);
// console.log('window.localStorage', window.localStorage);
//
// localStorage.setItem('name', 'Grogu');

// console.log('this.localStorage', this.localStorage);
// console.log('window.localStorage', window.localStorage);
//
// console.log('this.localStorage.name', this.localStorage.name);
// console.log('window.localStorage.name', window.localStorage.name);
//
// console.log(localStorage.getItem('name'))
//
// Window.prototype.grogu = 'Grogu Global';
// console.log(grogu);
// console.log(this.grogu);

// function greetGlobalGrogu() {
//     console.log(this.grogu)
//     console.log(grogu)
// }
// greetGlobalGrogu();

// const  = {
//     name: 'Grogu',
//     surname: '',
//     age: 51,
//     getMe(){
//         console.log('getMe()', this);
//     },
//     getMeArrow: () => {
//         console.log('getMeArrow()', this);
//     },
//     greetMe(){
//         console.log(`Hello ${this.name}`);
//     },
//     sayHi: function(){
//         console.log(`Hi ${this.name}`);
//     },
// }

// person.getMe();
// person.getMeArrow();
//
// person.greetMe();
// person.sayHi();

// call | apply
// const person = {
//     name: 'Din',
//     surname: 'Djarin',
//     age: 34
// }
//
// function sayHi(title = '', ending = ''){
//     console.log(`
//      Hi ${title} ${this.name} ${this.surname} ${ending}
//     `)
// }
// // sayHi();
//
// function getParams(){
//     return ['Mr.', '!'];
// };
//
// sayHi.call(person, 'Mr.', '!');
// sayHi.call(person, ...getParams())
// sayHi.apply(person, ['Mr.', '!'])
// sayHi.apply(person, getParams())

// const person = {
//     name: 'Din',
//     surname: 'Djarin',
//     age: 34
// }

// const namespace = {
//     sayHi(title = '', ending = '') {
//         console.log(`
//             Hi ${title} ${this.name} ${this.surname} ${ending}
//         `)
//     },
//     getBirthYear (){
//         return new Date().getFullYear()-this.age;
//     },
//     getBirthYearArrow: () =>{
//         return new Date().getFullYear()-this.age;
//     }
// }

// const birthYear = namespace.getBirthYear.call(person)
// const birthYearArrow = namespace.getBirthYearArrow.call(person)

// console.log(birthYear);
// console.log(birthYearArrow)

// person.sayHi = namespace.sayHi.bind(person, 'Mr.', '!');
// person.sayHi();

// console.log('person', person);
//
// person.sayHi = namespace.sayHi.bind(person)
// person.sayHi('Mr.', '!');
//
// console.log('person', person);

//IIFE - "ifies"

// (function () {
//     const person01 = {
//         name: 'Din',
//         surname: 'Djarin',
//         age: 34
//     }
//
//     function sayHi() {
//         console.log(`Hi ${this.name} ${this.surname}`)
//     }
//
//     console.log(person01)
//     sayHi.call(person01);
// })();
//
// (function () {
//     const person02 = {
//         name: 'Grogu',
//         surname: '',
//         age: 51
//     }
//     console.log(person02)
// })();

// console.log(person01)
// console.log(person02)