const barsBoton = document.querySelector(".bars__boton");
const navegador = document.querySelector(".navegador");

barsBoton.addEventListener ("click", () => {
    navegador.classList.toggle("navegador_visible");
});