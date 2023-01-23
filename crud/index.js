console.log('CRUD');

window.onload = () => {
    const preloader = document.getElementById('loading-container');
    const postsContainer = document.getElementById('posts-container');
    const postAddContainer = document.getElementById('post-add-container');
    const postsTable = document.getElementById('posts-table-body');
    const createPostForm = document.getElementById('create-post-form');

    createPostForm.addEventListener('submit', (event) => {
        event.preventDefault()

        fetchJsonResponse(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: document.getElementById('add-post-title').value,
                body: document.getElementById('add-post-body').value,
                userId: document.getElementById('add-post-user-id').value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then(response => {
            postsTable.append(getPostLayout(response))

            return response;
        }).then((response) => {
            setTimeout(() => {
                alert(`Post was created! New id: ${response.id}`)
            }, 1)
        })
    })

    fetchJsonResponse('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            renderPosts(response);
        }).then(() => {
        hideElement(preloader);
        showElement(postsContainer);
        showElement(postAddContainer);
    })


    function fetchJsonResponse(url, options = null) {
        return fetch(url, options).then(response => response.json());
    }

    function hideElement(element) {
        element.classList.add('hidden');
    }

    function showElement(element) {
        element.classList.remove('hidden');
    }

    function renderPosts(posts) {
        const postsHtml = posts.map(post => getPostLayout(post))
        postsHtml.map(post => postsTable.append(post))
    }

    function getPostLayout(post) {
        const postRow = document.createElement('tr');
        postRow.setAttribute('id', `post-row-${post['id']}`);
        postRow.append(getTableCell(post['id'], 'table-id-cell'));
        postRow.append(getTableCell(post['userId'], 'table-user-id-cell'));
        postRow.append(getTableCell(post['title'], 'table-title-cell', post['id']));
        postRow.append(getTableCell(post['body'], 'table-body-cell', post['id']));
        postRow.append(getTableActionButtonsCell(post['id']));

        return postRow;
    }

    function getTableCell(value, cssClass, id = null) {
        const cell = document.createElement('td');
        cell.classList.add(cssClass);

        if (cssClass === 'table-title-cell') {
            const elemId = `title-input-${id}`;
            let input = document.createElement('input');
            input.setAttribute('id', elemId);
            input.setAttribute('readonly', 'readonly');
            input.value = value;
            input.addEventListener('dblclick', () => toggleReadonly(input));

            cell.append(input)
        } else if (cssClass === 'table-body-cell') {
            const elemId = `body-textarea-${id}`;
            const textarea = document.createElement('textarea');
            textarea.setAttribute('id', elemId);
            textarea.setAttribute('readonly', 'readonly');
            textarea.value = value;
            textarea.addEventListener('dblclick', () => toggleReadonly(textarea));

            cell.append(textarea)
        } else {
            cell.innerText = value;
        }

        return cell;
    }

    function toggleReadonly(element) {
        if (element.hasAttribute('readonly')) {
            element.removeAttribute('readonly');
        } else {
            element.setAttribute('readonly', 'readonly');
        }
    }

    function getTableActionButtonsCell(id) {
        const cell = document.createElement('td');
        cell.classList.add('table-action-cell');

        cell.append(getActionButton(id, 'update'));
        cell.append(getActionButton(id, 'delete'));

        return cell;
    }

    function getActionButton(id, name) {
        const button = document.createElement('button');
        button.setAttribute('id', `${name}-${id}`);
        button.innerText = name;

        if (name === 'update') {
            button.addEventListener('click', () => {
                fetchJsonResponse(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        title: document.getElementById(`title-input-${id}`).value,
                        body: document.getElementById(`body-textarea-${id}`).value
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                })
                    .then((response) => {
                        document.getElementById(`title-input-${id}`).value = response['title'];
                        document.getElementById(`body-textarea-${id}`).value = response['body'];

                    })
                    .then(() => {
                        setTimeout(() => {
                            alert(`Post with id: ${id} was updated!`)
                        }, 1)
                    })
            });
        }

        if (name === 'delete') {
            button.addEventListener('click', () => {
                fetchJsonResponse(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'DELETE'})
                    .then(() => {
                            const postRow = document.getElementById(`post-row-${id}`);
                            postRow.remove();
                        }
                    ).then(() => {
                    setTimeout(() => {
                        alert(`Post with id: ${id} was deleted!`);
                    }, 1)
                })
            })
        }

        return button;
    }
}