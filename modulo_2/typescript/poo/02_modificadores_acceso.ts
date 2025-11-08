class Libro {
    public titulo: string;
    private autor: string;
    protected cota: string = '123323322';
    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
    }
    getAutor(): string {
        return this.autor;
    }
    setAutor(autor: string): void {
        this.autor = autor;
    }
    getCota(): string {
        return this.cota;
    }
}

const libroHistoriaQuito = new Libro("Historia de Quito", "Juan Pérez");
console.log('Título', libroHistoriaQuito.titulo);
console.log('Autor', libroHistoriaQuito.getAutor());
console.log('Cota', libroHistoriaQuito.getCota());
libroHistoriaQuito.setAutor("Luis Lozano");
console.log('Autor', libroHistoriaQuito.getAutor());