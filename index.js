const imageBox = document.getElementById('imagebox');
const anteriorBtn = document.getElementById('anterior');
const siguienteBtn = document.getElementById('siguiente');
const imagenes = document.getElementById('imagenes').getElementsByTagName('img');

let index = 0;
        
function mostrarImagen(index) {
    imageBox.src = imagenes[index].src;
}

anteriorBtn.addEventListener('click', function() {
    index = (index === 0) ? imagenes.length - 1 : index - 1;
    mostrarImagen(index);
});

siguienteBtn.addEventListener('click', function() {
    index = (index === imagenes.length - 1) ? 0 : index + 1;
    mostrarImagen(index);
});

mostrarImagen(index);