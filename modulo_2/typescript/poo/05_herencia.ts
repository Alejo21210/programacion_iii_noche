export class vehiculo {
    public marca: string;
    constructor(marca: string) {
        this.marca = marca;
    }
    moverse(): void {
        console.log(`El vehículo de marca ${this.marca} se está moviendo.`);
    }
}
class Moto extends vehiculo {};
const miMoto = new Moto('Honda');
miMoto.moverse();