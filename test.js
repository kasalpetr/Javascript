// Napište funkci pro validaci kontrolního kódu.
// Dws862032lok_254.kod123
//  Kontrolní kód se skládá z následujících symbolů.
//  První písmeno velké a dvě následující malá.
//  Následuje kombinace znaků a čísel v rozmezí 8-12.
//  Dále jeden speciální znak ze skupiny ?:_“!/(‚
//  Slovo kod
//  Trojmístná kombinace čísel 0-9.
//  V případě, že kontrolní kód nesplňuje některý požadavek funkce vypíše
// který z požadavků není splněný. 

var kod = "Dws1231231231.1.kod123";

let regexprvni = /^[A-Z]{1}[a-z]{2}[.]{0,}/;
let regexkombinace = /^[A-Z]{1}[a-z]{2}([0-9]||\W){8,12}/;
let regexspec = /^[A-Z]{1}[a-z]{2}([0-9]||\W){8,12}\W{1}/;
let regexkod = /^[A-Z]{1}[a-z]{2}([0-9]||\W){8,12}\W{1}kod/;
let regexkombinace2 = /^[A-Z]{1}[a-z]{2}([0-9]||\W){8,12}\W{1}kod[0-9]{3}/;
let regexdelsi = /^[A-Z]{1}[a-z]{2}([0-9]||\W){8,12}\W{1}kod[0-9]{3}$/;


    if (regexprvni.test(kod)){
     
    }else{

        console.log("na zacatku neni maly,velky");
    }
    if (regexkombinace.test(kod)) {
          
    }else{
        console.log("spatna kombinace znaku a cisel");
    }
    if (regexspec.test(kod)) {
            
    } else {
        console.log("spatny specialni znak")
    }
    if (regexkod.test(kod)) {
                    
    } else {
        console.log("nemas tam slovo kod")
    }
    if (regexkombinace2.test(kod)) {
                  
    } else {
        console.log("nnemas tam na konci 3 cisla")
    }

    if (regexdelsi.test(kod)) {
                    
    } else {
        console.log("mas tam neco navic")
    }
    // 1. Napište funkci pro validaci URL adresy. Adresa se skládá z následujících částí
    // Protokol://hostname/cesta?dotaz
    // Například http://spse.cz/?zak=dostal123
    //  Část protokol může obsahovat http, https, ftp, sftp.
    //  Hostname se skládá z názvu domény a národní domény. Obsahovat
    // může pomlčky číslice a písmena malé abecedy.
    //  Cesta se skládá z umístění dané stránky. Obsahuje písmena malé
    // abecedy.
    //  Dotaz obsahuje znaky malé abecedy následované rovnítkem a sekvencí
    // znaků a čísel. Dotazů v url adrese může být více za sebou – oddělené
    // středníkem.
    var url = "http://spse.cz/?zak=dostal123";
    
   
    function urlvalidace(url) {
          let regex = (/^((http||https||ftp||sftp):\/\/)?[a-z0-9\-]+\.[a-z0-9\-]+\/([a-z]+\/){0,}\?[a-z]+=[a-z0-9]+(;[a-z]+=[a-z0-9]+){0,}$/);
          if (regex.test(url)) {
              console.log("dobra adresa")
              return true;
          }else{
              console.log("spatna adresa")
            return false;
          }
          
      }
   




//     3. Napište funkci pro řešení kvadratické rovnice 𝒂𝒙𝟐 + 𝒃𝒙 + 𝒄 = 𝟎.
//  a,b,c jsou volitelné parametry. 

function pocitej(a, b, c) {
    let d = (b * b) - 4 * a * c;
    let x1;
    let x2;
    let arr = Array();
    if (d < 0) {
        arr.push("rovnice nema reseni");
    } else {
        x1 = (-b + (Math.sqrt(d))) / (2 * a);
        x2 = (-b - (Math.sqrt(d))) / (2 * a);
        console.log(Math.sqrt(d));
        arr.push(x1);
        arr.push(x2);
    }
    return arr;
}