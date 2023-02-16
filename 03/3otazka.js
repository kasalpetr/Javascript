// 3.   Napište program, který určí hodnotu prvního čísla dělitelného pěti, které 
// se vyskytne v konečném počtu čísel postupně ukládaných do 
// jednoduché proměnné číslo. Výsledek standardním způsobem vypíše. Pokud 
// se mezi načtenými čísly žádné číslo dělitelní pěti nevyskytne, podá o tom informaci.


 function Delitel() {
    let cislo = [];
    let prvni = -1;
    for (let i = 0; i < 10; i++) {
        cislo[i] = Math.floor(Math.random() * 20); 
        console.log(cislo[i]);
        if (((cislo[i] % 5) == 0) && prvni == -1) {
            prvni = cislo[i];
        }
    }
    
    if (prvni == -1) {
        console.log("Není číslo dělitelné 5");
    }else{
        console.log("První číslo dělitelne 5: " + prvni);
    }
 }

 Delitel();


