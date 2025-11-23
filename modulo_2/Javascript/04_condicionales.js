console.log("CONDICIONALES");
console.log("CONDICIONAL IF");
let temperatura = 32;
if (temperatura > 30) {
    console.log("Hace calor");
}
console.log("CONDICIONAL IF - ELSE");
const password = "password123";
if (password === "password123") {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}

console.log("CONDICIONAL ANIDADO");
const edad=19;
const tieneLicencia=true;
if (edad >= 18) {
    if (tieneLicencia===true) {
        console.log("Puede conducir");
    } else {
        console.log("No puede conducir");
    }
} else {
    console.log("Es menor de edad");
}

//CONDICIONAL ELSE IF
if(edad>=18 &&tieneLicencia){
    console.log("Puede conducir")
} else if(edad>18){
    console.log("Necesita Licencia");
}else{
    console.log("Es menor de edad");
}

console.log("CONDICIONAL SWITCH");
const dia = "lunes";
switch (dia) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Es un día laborable");
        break;
    case "sabado":
    case "domingo":
        console.log("Es fin de semana");
        break;
    default:
        console.log("Dia no valido");
}