pomocnyIndex = 0;
let pole = ["red", "orange", "yellow", "green", "blue", "purple","brown", "cyan", "pink", "black"];


function barvy(index) {
    document.querySelector("div").style.background = pole[index];
}
window.onload = barvy(0);
//dopredu
document.querySelector(".vpred").addEventListener("click", () => {
    pomocnyIndex++;
    console.log(pomocnyIndex);
    if (pomocnyIndex >= pole.length) {
        pomocnyIndex = 0;
        
    }
    barvy(pomocnyIndex);
});
//dozadu
document.querySelector(".vzad").addEventListener("click", () => {
    pomocnyIndex--;
    console.log(pomocnyIndex);
    if (pomocnyIndex <= -1) {
        pomocnyIndex = pole.length - 1;
        
    }
    barvy(pomocnyIndex);
});
//casovac
let starstop = false;
var int;
document.querySelector(".startStop").addEventListener("click", () => {
    if (starstop) {
        clearInterval(int);
        starstop = false;
    } else {
        int = setInterval(function() {
            console.log(rnd = Math.floor(Math.random() * (pole.length)));
            barvy(rnd);
        }, 2000);
        starstop = true;
    }
});