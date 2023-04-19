console.log('Throttle, debounce and lazy load');

function updateView(clientX, clientY, mouseMoveCount) {
    const mouseMoveCounterEl = document.querySelector('#mouseMoveCount');
    const mousePositionXEl = document.querySelector('#mousePositionX');
    const mousePositionYEl = document.querySelector('#mousePositionY');

    mouseMoveCounterEl.innerText = mouseMoveCount;
    mousePositionXEl.innerText = clientX;
    mousePositionYEl.innerText = clientY
}

function updateTimeCounter(value){
    const mouseWithTimeControlCounterEl = document.querySelector('#mouseWithTimeControlCounter');
    mouseWithTimeControlCounterEl.innerText = value;
}

//Throttle and debounce with lodash
// window.onload = () => {
//     let mouseMoveCount = 0;
//     let mouseWithTimeControlCount = 0;
//
//     document.addEventListener('mousemove', (event) => {
//         // console.log(event);
//         mouseMoveCount++;
//         updateView(event.clientX, event.clientY, mouseMoveCount)
//     })
//
//     document.addEventListener('mousemove', _.throttle(event => {
//         // console.log(event)
//         mouseWithTimeControlCount++;
//         updateTimeCounter(mouseWithTimeControlCount);
//     }, 600))
//
//     document.addEventListener('mousemove', _.debounce(event => {
//         // console.log(event)
//         mouseWithTimeControlCount++;
//        updateTimeCounter(mouseWithTimeControlCount);
//     }, 600))
// }

//Throttle and debounce with RxJs
// window.onload = () => {
//     let mouseMoveCount = 0;
//     let mouseWithTimeControlCount = 0;
//
//     const { debounceTime, throttleTime } = rxjs.operators;
//
//     const mouseMove = rxjs.fromEvent(document, 'mousemove');
//     mouseMove.subscribe(event => {
//         mouseMoveCount++;
//         updateView(event.clientX, event.clientY, mouseMoveCount)
//     });
//
//     const mouseMoveDebounced = rxjs.fromEvent(document, 'mousemove').pipe(debounceTime(200))
//     mouseMoveDebounced.subscribe(event => {
//         mouseWithTimeControlCount++;
//         updateTimeCounter(mouseWithTimeControlCount);
//     });
//
//     const mouseMoveThrottled = rxjs.fromEvent(document, 'mousemove').pipe(throttleTime(200))
//     mouseMoveThrottled.subscribe(event => {
//         mouseWithTimeControlCount++;
//         updateTimeCounter(mouseWithTimeControlCount);
//     });
// }