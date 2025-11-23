console.log("CICLOS O BUCLES");
console.log("FOR OF");
const nombres = ["Jose", "Juan", "Simon", "Pedro"];
for (const nombre of nombres) {
    console.log("Hola " + nombre);
}

const nombre = "Alejandro";
for (const letra of nombre) {
    console.log(letra);
}

//NUMEROS
const numerosDesarreglados = [7, 3, 12, -2, 9, 0, 15, 4];
let mayor = numerosDesarreglados[0];
for (const num of numerosDesarreglados) {
    if (num > mayor) {
        mayor = num;
    }
}
console.log("El número mayor es:", mayor);
//PERSONAS
const persona = {
    nombre: "Anakin",
    apellido: "Skywalker",
    profesion: "Jedi"
}
for (const clave in persona) {
    console.log(clave, clave, ":", persona[clave]);
}
//LIBROS
const libros = { 
    titulo: "El Principito", autor: "Antoine de Saint-Exupéry" 
};
suma_claves=0;
for (const clave in libros) {
    suma_claves++;
}
console.log(suma_claves);