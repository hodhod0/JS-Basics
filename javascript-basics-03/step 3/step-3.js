var green = document.querySelector('.green');
var red = document.querySelector('.red');
var blue = document.querySelector('.blue');
var text = document.getElementById('text');

const changeColor = (color) => {
    text.style.color = color;
};

green.addEventListener("click", () => {
    changeColor("green")
});

red.addEventListener("click", () => {
    changeColor("red")
});

blue.addEventListener("click", () => {
    changeColor("blue")
});