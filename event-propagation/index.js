console.log('Event Propagation');

window.onload = () => {
    const appEl = document.querySelector('#app');
    const appButtonsContainerEl = document.querySelector('#app-buttons-container')
    const buttonEls = document.querySelectorAll('.container-item__button');

    // console.log(appEl)
    // console.log(appButtonsContainerEl)
    // console.log(buttonEls)

    appEl.addEventListener('click', (event) => {
        console.log('appEl was clicked!')
        console.log('event.target', event.target)
        console.log('event.currentTarget', event.currentTarget)
        console.log('------------------')
    });

    appButtonsContainerEl.addEventListener('click', (event) => {
        console.log('appButtonsContainerEl was clicked!')
        console.log('event.currentTarget', event.currentTarget)

        // if(event.target.dataset.id){
        //     console.log(`app button ${event.target.dataset.id} was clicked`);
        //     console.log('event.event.target.dataset.id', event.target.dataset.id);
        // }else{
        //     return;
        // }
        console.log('------------------')
    });

    buttonEls.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.stopPropagation();
            // event.stopImmediatePropagation();
            console.log('buttonEls was clicked!')
            console.log('event.target', event.target)
            console.log('event.currentTarget', event.currentTarget)
            console.log('------------------')
        })
    });
}
