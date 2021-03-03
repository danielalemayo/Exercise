const listShapes = ['square', 'rectangle', 'triangle', 'circle'];
const shape = document.getElementById('shape');
var shapesCountihng = 0;
var seconds = 0;


function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function buttonDisplay() {
    const button = document.getElementById('startButton');
    button.style.display = 'none'
}
function getRandomShape() {
    let randomindex = getRandomNum(0, listShapes.length);
    countShapes();
    shape.className = listShapes[randomindex];
    setShapePosition(shape);
}

function clickOnShape() {
    getRandomShape();
    setInterval(seconds, 7000);
    shape.innerText = 'Shape number: ' + shapesCountihng;
    timeResult(shape);
}

function countShapes() {
    return shapesCountihng++;
}

function setLeft(left) {
    if (left === NaN || left === undefined) {
        left = 0;
    }
    return left;
}

function setTop(top) {
    if (top === undefined) {
        top = 0;
    }
    return top;
}

function setShapePosition(element) {
    let { width, hight } = shape.getBoundingClientRect();
    width = setLeft(width);
    hight = setTop(hight)
    const maxTop = window.innerHeight - hight;
    const maxLeft = window.innerWidth - width;
    element.style.position = 'absolute';
    element.style.top = `${getRandomNum(0, maxTop)}px`;
    element.style.left = `${getRandomNum(0, maxLeft)}px`;
}

function timeResult(element) {
    if (seconds > 0) {
        clearInterval();
        element.innerText = `It tooks you ${seconds} to click on the shape!`;
        seconds = 0;
    }
}
