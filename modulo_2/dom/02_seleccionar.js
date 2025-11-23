const titulo = document.querySelector('.titulo'); // ahora busca por clase
if (titulo) {
    console.log(titulo.textContent);
} else {
    console.warn('No se encontró el elemento .titulo');
}

const notas = document.getElementsByClassName('nota');
Array.from(notas).forEach(nota => console.log(nota.textContent));

const items = document.getElementsByClassName('item');
Array.from(items).forEach(item => console.log(item.textContent));

const notaNames = document.getElementsByName('notaName');
Array.from(notaNames).forEach(nota => {
    // si es un input usar .value, si es un elemento normal usar .textContent
    console.log(nota.value ?? nota.textContent);
});