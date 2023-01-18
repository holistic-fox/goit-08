console.log('Practice');

// Example 03

// fetch('https://restcountries.com/v2/all?fields=flags')
//      .then(r => r.json())
//      .then(r => r.map(object => object['flags']['svg']))
//      .then(r => console.log(r))
//      .catch(e => console.log('Error', e))

// fetch('https://restcountries.com/v2/all?fields=flag')
//     .then(r => r.json())
//     .then( r => console.log(r))
//     .catch(e => console.log('Error', e))

// fetch('https://restcountries.com/v2/all')
//     .then(r => r.json())
//     .then( r => console.log(r))
//     .catch(e => console.log('Error', e))

// Example 02
const starshipName = 'Millennium Falcon';

fetch('https://swapi.dev/api/starships')
    .then(r => r.json())
    .then((r) => {
        const starships = r['results'];
        const films = starships.find(ship => starshipName === ship['name'])['films'];

        return Promise.all(films.map(film => fetch(film)));
    })
    .then(responses => {
        // This line was missing!
        return Promise.all(responses.map(res => res.json()));
    })
    .then(r => {
        console.log('response 02', r);
    })
    .catch(e => console.log('Error', e));


//Example 01
// const starshipName = 'Death Star';
//
// fetch('https://swapi.dev/api/starships')
//     .then(r => r.json())
//     .then(r => {
//         const starships = r['results'];
//
//         console.log(starships)
//
//         const film = starships.find(ship => starshipName === ship['name'])['films'][0];
//
//         console.log(film)
//
//         return fetch(film);
//     })
//     .then(r => r.json())
//     .then(r => {
//         console.log(r['title']);
//     })
//     .catch(e => console.log('Error', e));