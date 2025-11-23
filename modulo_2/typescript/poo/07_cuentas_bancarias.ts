abstract class CuentaBase {
    private saldo: number=0;
    abstract operar(): void;

    modificarSaldo(monto: number): void {
        this.saldo += monto;
    }
    consultarSaldo(): number {
        return this.saldo;
    }
}
class CuentaAhorro extends CuentaBase {
    operar(): void {
        console.log('Operación en cuenta de ahorro realizada.');
    }
}

class CuentaCorriente extends CuentaBase {
    operar(): void {
        console.log('Operación en cuenta corriente realizada.');
    }
}
const myCuentaAhorro = new CuentaAhorro();
myCuentaAhorro.modificarSaldo(600);
myCuentaAhorro.operar();
console.log(`Saldo en cuenta de ahorro: ${myCuentaAhorro.consultarSaldo()}`);

const myCuentaCorriente = new CuentaCorriente();
myCuentaCorriente.modificarSaldo(1000);
myCuentaCorriente.operar();
console.log(`Saldo en cuenta corriente: ${myCuentaCorriente.consultarSaldo()}`);