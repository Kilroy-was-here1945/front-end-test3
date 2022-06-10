console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submited');
}



document.querySelector('#contact').addEventListener('submit', handleSubmit);


function mouseover(evt) {
	evt.preventDefault();
	
	alert('nice face');
}


document.querySelector('#duck').addEventListener('mouseover', mouseover);