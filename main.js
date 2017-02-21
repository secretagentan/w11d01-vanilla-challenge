console.log('hello from main.js');

// var btnText = btn.innerHTML;
var btn = document.querySelector('button');
var counter = 0;
const input = document.querySelector('input');
input.focus();

function handleBtn (evt) {
  // console.log('button clicked');
  // console.log(btnText);
  // btn.innerHTML = btnText++;
  btn.textContent = counter += 1;
}
btn.addEventListener('click', handleBtn);

const colors = [];
const newColorForm = document.querySelector('#new-color-form');

function handleInput (evt) {
  evt.preventDefault();
  const color = document.querySelector('#new-color').value;
  colors.push(color);
  // change background
  changeBackground(color);
  // render list
  renderColors(colors);
}
// input.addEventListener('keypress', handleInput);
newColorForm.addEventListener('submit', handleInput);

function changeBackground(color) {
  document.body.style.backgroundColor = color;
}

// const
function renderColors(colors) {
  const html = colors.map( color => `<li>${color}</li>`).join('');
  document.querySelector('#colors').innerHTML = html;
}
newColorForm.addEventListener('submit', handleInput);
