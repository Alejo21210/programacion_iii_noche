let parrafo=null;
const btnCrear=document.getElementById("crear");
const contenedor=document.getElementById("contenedor");
btnCrear.addEventListener("click",()=>
{
    parrafo=document.createElement("p");
    parrafo.textContent="PARRAFO DINAMICO";
    parrafo.classList.add("parrafo");
    contenedor.appendChild(parrafo);
});
const btnEliminar=document.getElementById("eliminar");
btnEliminar.addEventListener("click",()=>
    {
    if(parrafo) parrafo.remove();
    const parrafos=document.querySelectorAll(".parrafo");
    Array.from(parrafos).forEach(p=>p.remove());
});

const btnDobleClick=document.getElementById("btnDobleClick");
btnDobleClick.addEventListener("dblclick",()=>
{
    alert("HICISTE DOBLE CLICK");
});

const inputTexto=document.getElementById("nombre");
inputTexto.addEventListener("input",(e)=>
{
    console.log('Escribiendo:', e.target.value);
});

const form=document.getElementById("formulario");
form.addEventListener("submit",(e)=>
{
    e.preventDefault();
    alert(`FORMULARIO ENVIADO: ${inputTexto.value}`);
});

inputTexto.addEventListener("keydown",(e)=>
{
    console.log('TECLA PRESIONADA:', e.key);
});
window.addEventListener("scroll",()=>
{
    console.log('Scroll detectado');
});
