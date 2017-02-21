console.log('hello from main.js');

var btn = document.querySelector('button');
var btnText = btn.innerHTML;

function handleBtn (evt) {
  // console.log('button clicked');
  // console.log(btnText);
  btn.innerHTML = btnText++;
}
btn.addEventListener('click', handleBtn);


