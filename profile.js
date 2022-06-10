

const color = (evt) => {
	evt.preventDefault();
	alert('green');
}
const place = (evt) => {
	evt.preventDefault();
	alert('atlantis bahamas');
}
const ritual = (evt) => {
	evt.preventDefault();
	alert('christmas');
}














document.querySelector('#color').addEventListener('click', color)
document.querySelector('#place').addEventListener('click', place)
document.querySelector('#ritual').addEventListener('click', ritual)