/*
1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/
let numeroMagico = 0;
const comenzar = () => {
    const etiquetaNueva = document.createElement("h3");
    etiquetaNueva.innerHTML = `Perfecto! Ahora ya puedes adivinar el número mágico. 😁`;
    etiquetaNueva.className = `my-1 text-danger`;

    const seccionInformacionExtra = document.getElementsByClassName("articulo");
    seccionInformacionExtra[0].appendChild(etiquetaNueva);

    numeroMagico = Math.round(Math.random()*(100));

    console.log(numeroMagico);
}

const adivinar = () => {
    const numero = document.getElementById("numeroIngresado").value;
    console.log(numero);
    if(numero == numeroMagico) {
        alert("CORRECTO!!!! Felicitaciones, adivinaste el número mágico");
        const etiquetaNueva = document.createElement("h2");
        etiquetaNueva.innerHTML = `¡¡¡¡FELICITACIONES!!!! <br> Encontraste el número mágico <br> ACABAS DE GANAR EL JUEGO`;
        etiquetaNueva.className = "text-danger text-center bg-dark my-2";

        const seccionInformacionExtra = document.getElementsByClassName("cuadro");
        seccionInformacionExtra[0].appendChild(etiquetaNueva);
    }else if(numero > numeroMagico) {
        alert(`No le acertaste al número mágico. Sigue intentando.
        🙉 pssst
        ~ El número mágico es menor que el número que ingresaste.
        😉`);
    }else {
        alert(`No le acertaste al número mágico. Sigue intentando.
        🙉 pssst
        ~ El número mágico es mayor que el número que ingresaste.
        😉`);
    }
}

const btnComenzar = document.getElementById("btnComenzar");
btnComenzar.addEventListener("click",comenzar);

const btnAdivinar = document.getElementById("btnAdivinar");
btnAdivinar.addEventListener("click",adivinar);