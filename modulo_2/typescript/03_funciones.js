function saludar() {
    return "¡Hola desde una función en TypeScript!";
}
console.log(saludar());
function suma() {
    return 3 + 7;
}
console.log(suma());
function sumar(numero1, numero2) {
    return numero1 + numero2;
}
console.log(sumar(9, 6));
function sumarOpcional(numero1, numero2) {
    return numero1 + (numero2 ? numero2 : 15);
}
console.log(sumarOpcional(19, 6));
console.log(sumarOpcional(10));
var sumarFlecha = function (numero1, numero2) {
    return numero1 + (numero2 ? numero2 : 15);
};
console.log(sumarFlecha(5, 10));
console.log(sumarFlecha(5));
function mostrarMensaje(mensaje) {
    console.log(mensaje);
}
mostrarMensaje("Este es un mensaje de tipo void");
