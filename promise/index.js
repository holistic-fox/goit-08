console.log('Hello');

const isSuccess = false;

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isSuccess) {
            resolve('Success');
        } else {
            reject('Error');
        }
    }, 1000);
});

console.log(promise);

// const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(text), delay);
//     });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);
// const promiseC = makePromise("promiseC value", 2000);
//
// Promise.race([promiseA, promiseB, promiseC])
//     .then(value => console.log('Race winner: ' + value))
//     .catch(error => console.log(error));

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);
// const promiseC = makePromise("promiseC value", 2000);
//
// Promise.all([promiseA, promiseB, promiseC])
//     .then(value => console.log(value))
//     .catch(error => console.log(error));

// promise
//     .then(value => {
//         const promise = new Promise((resolve, reject) => {
//             const ifSuccess = true;
//             if (ifSuccess) {
//                 resolve(value + ' Nested Promise Resolver')
//             }
//             else {
//                 reject('Reject')
//             }
//         });
//         return promise;
//     })
//     .then(value => {
//         console.log('Nested Promise Value: ', value);
//     }).catch((error) => {
//     console.log('Chain', error)
// });

// promise.then(
//     value => {
//         console.log('onResolved', value)
//     },
//     error => {
//         console.log('Error', error)
//     }
// );

// promise.then(
//     value => {
//         console.log('onResolved', value)
//     },
// ).catch(error => {
//     console.log('Error Catch', error)
// })

// function sayHello(name = 'Stranger'){
//     console.log('Hello ', name);
// }
//
// function checkIfLogInAndDoSomething(loginStatus = false, callback){
//     if(!loginStatus){
//         console.log('Please log in');
//         return false;
//     }else{
//         callback();
//     }
// }
//
// function setName(name, callback){
//     if(!name){
//         return false;
//     }else{
//         callback(name);
//     }
// }
//
// checkIfLogInAndDoSomething(true, setName("Ania", sayHello));