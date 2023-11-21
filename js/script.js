/*
1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/
const comenzar = () => {
    console.log("Desde la función comenzar.");

    const etiquetaNueva = document.createElement("h3");
    etiquetaNueva.innerHTML = `Excelente! Ahora ya puedes adivinar el número mágico. 😁`;
    etiquetaNueva.className = `my-1 text-danger`;

    const seccionInformacionExtra = document.getElementsByClassName("articulo");
    console.log(seccionInformacionExtra);
    seccionInformacionExtra[0].appendChild(etiquetaNueva);
}

const btnComenzar = document.getElementById("btnComenzar");

btnComenzar.addEventListener("click",comenzar);

