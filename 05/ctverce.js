let player = 0;

function changeColor(e) {
	if(player % 2) this.classList.add('cervena');
	else this.classList.add('modra');
	if(player == 8)alert('Skončil jsi');
	player++;
	this.removeEventListener('click',changeColor);
}

let tdall = document.querySelectorAll('td');
for(td of tdall) {
	td.addEventListener('click',changeColor);
}