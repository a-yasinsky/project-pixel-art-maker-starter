// Select color input
const inputColor = document.getElementById('colorPicker');
// Select size input
const inputWidth = document.getElementById('input_width');
const inputHeight = document.getElementById('input_height');
// Select table
const canvasTable = document.getElementById('pixel_canvas');
// Select Form
const sizeForm = document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()
sizeForm.addEventListener('submit', function(evt){
	evt.preventDefault();
	makeGrid();
});

function changeColor() {
	this.style.backgroundColor = inputColor.value;
}

function makeGrid() {
	canvasTable.innerHTML = "";
    for(let row = 0; row < inputHeight.value; row++){
		let newTr = document.createElement('tr');
		for(let col = 0; col < inputWidth.value; col++){
			let newTd = document.createElement('td');
			newTd.classList.add('clickable');
			newTd.addEventListener('click', changeColor.bind(newTd));
			newTr.append(newTd);
		}
		canvasTable.append(newTr);
	}	
}
