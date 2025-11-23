class Persona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }   
    saludar(): void {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const amigoPedro = new Persona("Pedro", 30);
console.log('Nombre');
console.log(amigoPedro.nombre);
console.log('Edad');
console.log(amigoPedro.edad);
amigoPedro.saludar();