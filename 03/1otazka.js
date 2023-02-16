//  1.   Napište program, který do proměnné načte „x“ čísel (x zadává uživatel) a program určí a vypíše, kolik čísel bylo čtyřciferných.

function pocetCtyrCifer(pocetCisel = prompt("Zadej pocet čísel cislo")) {
    pole = []
    pocet = 0;
    for (let i = 0; i < pocetCisel; i++) {
        pole[i] = Math.floor(Math.random() * 5000);
        cifer = pole[i].toString().length;
        if (cifer == 4) {
            pocet++;
        }
    }
    console.log(pole);
    return pocet;
  
}
console.log(pocetCtyrCifer());