console.log('Pagination');

window.onload = () => {
    const loadButton = document.getElementById('load-people-button');
    const preloader = document.getElementById('loading-container');

    loadButton.addEventListener('click', () => {

        loadButton.classList.add('hidden');
        preloader.classList.remove('hidden');

        fetchJsonResponse('http://swapi.dev/api/people')
            .then(response => {
                renderPeoplePaginator(response['count']);
                renderPeopleList(response['results']);
            }).then(() => {
            preloader.classList.add('hidden');

            document.getElementById('pagination-container').classList.remove('hidden');
            document.getElementById('people-container').classList.remove('hidden');
        })
    });

    function fetchJsonResponse(url) {
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.log('Error: ', error))
    }

    function renderPeoplePaginator(count, selectedPage = 1, pageSize = 10) {
        const pages = Math.ceil(count / pageSize);

        const select = document.getElementById('people-pagination');
        select.innerHTML = '';

        for (let i = 1; i <= pages; i++) {
            const option = document.createElement('option');
            option.innerText = 'Page ' + i;
            option.value = i;
            if (i === Number(selectedPage)) {
                option.setAttribute('selected', true)
            }
            select.append(option);
        }
        select.addEventListener('change', (event) => {
            const selectedPage = event.target.value;
            const preloader = document.getElementById('loading-container');
            const paginatorElem = document.getElementById('pagination-container');
            const peopleList = document.getElementById('people-container');

            preloader.classList.remove('hidden');
            paginatorElem.classList.add('hidden');
            peopleList.classList.add('hidden');

            fetchJsonResponse(`http://swapi.dev/api/people/?page=${selectedPage}`)
                .then(response => {
                    renderPeoplePaginator(response['count'], selectedPage);
                    renderPeopleList(response['results']);
                }).then(() => {
                setTimeout(() => {
                    preloader.classList.add('hidden');
                    paginatorElem.classList.remove('hidden');
                    peopleList.classList.remove('hidden');
                }, 1500);
            });
        });
    }

    function renderPeopleList(people) {
        const peopleHtmlElems = people.map(person => getPersonLayout(person))
        const peopleList = document.querySelector('#people-container');
        peopleList.innerHTML = '';
        peopleHtmlElems.forEach(elem => peopleList.append(elem));
    }

    function getPersonLayout(person) {
        const root = document.createElement('div');
        root.classList.add('container-item');

        root.append(getPersonProp('', person['name']));
        root.append(getPersonProp('Birth Year: ', person['birth_year']));
        root.append(getPersonProp('Skin: ', person['skin_color']));
        root.append(getPersonProp('Hair: ', person['hair_color']));

        return root;
    }

    function getPersonProp(title, property) {
        const prop = document.createElement('div');
        prop.classList.add('card-title');
        prop.innerText = `${title}${property}`;
        return prop;
    }
}