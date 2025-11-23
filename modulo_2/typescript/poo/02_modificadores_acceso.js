var Libro = /** @class */ (function () {
    function Libro(titulo, autor) {
        this.cota = '123323322';
        this.titulo = titulo;
        this.autor = autor;
    }
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.getCota = function () {
        return this.cota;
    };
    return Libro;
}());
var libroHistoriaQuito = new Libro("Historia de Quito", "Juan Pérez");
console.log('Título', libroHistoriaQuito.titulo);
console.log('Autor', libroHistoriaQuito.getAutor());
console.log('Cota', libroHistoriaQuito.getCota());
libroHistoriaQuito.setAutor("Luis Lozano");
console.log('Autor', libroHistoriaQuito.getAutor());
