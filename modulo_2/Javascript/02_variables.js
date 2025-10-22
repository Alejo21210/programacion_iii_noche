console.log("VARIABLES")
var saludo1 = "Hola Mundo";
var saludo2 = "Hola desde una variable";
console.log(saludo1);


console.log(saludo1+" "+saludo2);
console.log(`${saludo1} ${saludo2} ${4+5}` );
let numero = 24;
const angulo = 45;
console.log(numero, angulo);

console.log("TIPOS DE DATOS")
var nombre="Darth Vader";
console.log("String", typeof (nombre));
var tipoNumero=44444;
console.log("Tipo Booleano", typeof (tipoBooleano));
var tipoIndefinido=undefined;
console.log("Tipo Indefinido", typeof (tipoIndefinido));
var tipoNula=null;
console.log("Tipo Nula", typeof (tipoNula));
var tipoSimbolo=Symbol("clave");
console.log("Tipo Símbolo", typeof (tipoSimbolo));
var tipoBigEntero=432423n;
console.log("Tipo Big Entero", typeof (tipoBigEntero));


const persona={
    nombre: "Alejandro",
    edad: 20
}
console.log(persona);
console.log(persona.edad);
console.log(persona.nombre);