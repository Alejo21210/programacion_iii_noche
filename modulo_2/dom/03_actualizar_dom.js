const mensaje=document.getElementById("mensaje");
mensaje.textContent="ACTUALIZADO DESDE JS";
mensaje.style.color="red";

const link=document.getElementById("link");
link.setAttribute("href","https://www.google.com");
link.classList.add("boton");
link.textContent="IR A GOOGLE";