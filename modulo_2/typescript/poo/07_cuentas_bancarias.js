var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CuentaBase = /** @class */ (function () {
    function CuentaBase() {
        this.saldo = 0;
    }
    CuentaBase.prototype.modificarSaldo = function (monto) {
        this.saldo += monto;
    };
    CuentaBase.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return CuentaBase;
}());
var CuentaAhorro = /** @class */ (function (_super) {
    __extends(CuentaAhorro, _super);
    function CuentaAhorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CuentaAhorro.prototype.operar = function () {
        console.log('Operación en cuenta de ahorro realizada.');
    };
    return CuentaAhorro;
}(CuentaBase));
var CuentaCorriente = /** @class */ (function (_super) {
    __extends(CuentaCorriente, _super);
    function CuentaCorriente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CuentaCorriente.prototype.operar = function () {
        console.log('Operación en cuenta corriente realizada.');
    };
    return CuentaCorriente;
}(CuentaBase));
var myCuentaAhorro = new CuentaAhorro();
myCuentaAhorro.modificarSaldo(600);
myCuentaAhorro.operar();
console.log("Saldo en cuenta de ahorro: ".concat(myCuentaAhorro.consultarSaldo()));
var myCuentaCorriente = new CuentaCorriente();
myCuentaCorriente.modificarSaldo(1000);
myCuentaCorriente.operar();
console.log("Saldo en cuenta corriente: ".concat(myCuentaCorriente.consultarSaldo()));
