//console.log("hola Mundo Gustavo");
//window.alert("hola Mundo");

//--

//variables
//let nombre = "Gustavo";
//let edad = 49;
//let juega = true;

//console.log("hola", nombre);
//console.log("edad:", edad);
//console.log("juega videojuegos:", juega);

//window.alert("hola "+nombre+", edad: "+edad);

//uso de etiquetas desde html
//document.getElementById("p01").innerHTML = "Mi nombre es "+nombre+", tengo "+edad+" años";
//document.getElementById("p02").innerHTML = edad;
//document.getElementById("p03").innerHTML = juega;


//--
let numero01;
let numero02;

let numero03;
let numero04;

let resultado;

document.getElementById("b01").onclick = function(){
    numero01 = document.getElementById("i01").value;
    numero02 = document.getElementById("i02").value;
    //así como está, solo concatenará los valores aún que haya puesto el input como number
    resultado = numero01 + numero02;
    console.log(resultado);
    //desde la vista siempre viene en string
    numero03 = Number(document.getElementById("i01").value);
    numero04 = Number(document.getElementById("i02").value);
    resultado = numero03 + numero04;
    document.getElementById("p01").innerHTML = resultado;

    //puedo ver el tipo de variable con
    console.log(typeof numero01);
    console.log(typeof numero03);
    console.log(typeof resultado);

    //se usó Number Constructor, pero puede ser String, o Boolean (si le paso "" será falso y si le paso con algo será true)
}