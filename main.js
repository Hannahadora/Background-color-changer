alert("Welcome to Adora's color changer game");

var button = document.querySelector('button');
var body = document.querySelector('body');
var text = document.querySelector('p');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink', 'brown', 'gray',];

body.style.backgroundColor = 'white'
button.addEventListener('click', changeBackground);

function changeBackground(e) {
    e.preventDefault();
    const colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex]
    text.innerText = ('color:' + colors[colorIndex] + '')
}