let regexPsc = /^\d{3} ?\d{2}$/;
//zacina cislici konci cislici
//mezera tam muze nebo nemusi byt
//bud 3 a 2 cisla nebo 5 cisel :D 
document.getElementById("psc").onkeyup = (evt) => {
    console.log (regexPsc.exec(document.getElementById("psc").value))
    if(regexPsc.test(document.getElementById("psc").value))
//    if (document.getElementById("psc").value.match(regexPsc))
   document.getElementById("vysledek").innerText = "Splnuje";
    else
    document.getElementById("vysledek").innerText = "nesplnuje";
};

let regexcislo = /\d+/;
let regexmaly = /[a-z]+/;
let regexVelky = /[A-Z]+/;
let regexdelka = /.{8,}/
let regexspec = /\W+/

document.getElementById("psc").onkeyup = (evt) => {
    if (regexVelky.test(document.getElementById("psc").value) && regexmaly.test(document.getElementById("psc").value)) {
        document.getElementById("pismena").classList.add("ok");
    }else{
        document.getElementById("pismena").classList.remove("ok");
    }

    if (regexdelka.test(document.getElementById("psc").value)) {
        document.getElementById("delka").classList.add("ok");
    }else{
        document.getElementById("delka").classList.remove("ok");
    }

    if (regexcislo.test(document.getElementById("psc").value)) {
        document.getElementById("cislice").classList.add("ok");
    }else{
        document.getElementById("cislice").classList.remove("ok");
    }

    if (regexspec.test(document.getElementById("psc").value)) {
        document.getElementById("specznak").classList.add("ok");
    }else{
        document.getElementById("specznak").classList.remove("ok");
    }

  
}

//velky a mala pismena
//osm znaku
//cislo
//specialni znak