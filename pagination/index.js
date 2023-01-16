console.log('Pagination');

fetchJsonResponse('http://swapi.dev/api/people')
    .then(response => {
        renderPeoplePaginator(response['count']);
        renderPeopleList(response['results']);
    });

function fetchJsonResponse(url){
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log('Error: ', error))
}

function renderPeoplePaginator(count, pageSize = 10, selectedPage = 1) {
    const pages = Math.ceil(count / pageSize);
    const select = document.getElementById('people-pagination');
    select.innerHTML = '';

    for(let i =1; i <= pages; i++){
        const option = document.createElement('option');
        option.innerText = i;
        option.value = i;
        if(i === Number(selectedPage)){
            option.setAttribute('selected', true)
        }
        select.append(option);
    }
    select.addEventListener('change', (event) => {
        fetchJsonResponse(`http://swapi.dev/api/people/?page=${event.target.value}`)
            .then(response => {
                renderPeoplePaginator(response['count'], 10, event.target.value);
                renderPeopleList(response['results']);
            });
    });
}

function renderPeopleList(people) {
    const peopleHtmlElems = people.map((person, index) => getPersonLayout(person, index))
    const peopleList = document.querySelector('#people-container');
    peopleList.innerHTML = '';
    peopleHtmlElems.forEach(elem => peopleList.append(elem));
}

function getPersonLayout(person, index) {
    const root = document.createElement('div');
    root.classList.add('container-item');

    root.append(getPersonProp('', person['name']));
    root.append(getPersonProp('Birth Year: ', person['birth_year'], index));
    root.append(getPersonProp('Skin: ', person['skin_color'], index));
    root.append(getPersonProp('Hair: ', person['hair_color'], index));

    return root;
}

function getPersonProp(title, property, index) {
    const prop = document.createElement('div');
    prop.classList.add('card-title');
    if (index !== undefined) {
        prop.classList.add(`person-toggle-prop-${index}`);
    }
    prop.innerText = `${title}${property}`;
    return prop;
}
