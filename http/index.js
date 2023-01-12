console.log('Start');

fetch('https://swapi.dev/api/people/')
    .then((response) => response.json())
    .then((json) => console.log(json));

fetch('https://swapi.dev/api/films/')
    .then((response) => response.json())
    .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts/', {
//     method: 'DELETE',
//     body: {
//         ids: [1,2,3,4,5,6,]
//     }
// }).then(() => {
//     console.log('Post was deleted!')
// });

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PATCH',
//     body: JSON.stringify({
//         title: 'foo foo foo',
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo foo',
//         body: 'bar bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => response.json())
//     .then(response => {
//         console.log(response)
//     })
//     .catch(error => {
//         console.log('Error: ', error)
//     });

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch(error => {
//         console.log('Error: ', error)
//     });
