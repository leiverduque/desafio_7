/*3*/

let integrante1 = "Leiver Antonio Duque Castro"
let integrante2 = "Decsy Lorena Duque Contreras"

console.log("integrante1: " + integrante1);
console.log("integrante2: " + integrante2);


/*4*/

let integrante11 = "Leiver Antonio Duque Castro"
let integrante22 = "Decsy Lorena Gonzales Contreras"

if (integrante11 == integrante22) {
    integrante11 = prompt("introduce un color");
}

let coinciden = window.prompt("hubo coincidencias,ingrese un color para destacar los nombres")
alert ("Su respuesta fue" + coinciden);


console.log("integrante11" == integrante22);


const array1 = ["Leiver, Antonio, Duque, Castro"];
const array2 = ["Decsy, Lorena, Duque, Contreras"];

console.log(array1 == array2);