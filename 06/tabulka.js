let prijmeni = document.querySelectorAll('tr td:last-child');
let jmena = document.querySelectorAll('tr td:nth-last-child(2)');
function whisper(e) {

	if(this.value.length > 2) {
		for(prij of prijmeni) {
			let pom = prij.innerText.toLowerCase();
			if(pom.includes(this.value.toLowerCase())) prij.parentElement.classList.add('zvyr');
		}
		for(jme of jmena) {
			let pom = jme.innerText.toLowerCase();
			if(pom.includes(this.value.toLowerCase())) jme.parentElement.classList.add('zvyr');
		}		
	}

}
filtr.addEventListener('keyup', whisper);