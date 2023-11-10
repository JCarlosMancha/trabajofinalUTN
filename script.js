document.addEventListener('DOMContentLoaded', () => {
  // Encapsula todo el código en una función para evitar la ejecución global
  const video = document.querySelector('video');
  const playButton = document.getElementById("play");
  const pauseButton = document.getElementById("pause");
  const showTimeElement = document.getElementById('showTime');

  // Muestra la duración del video
  setTimeout(() => {
    showTimeElement.innerHTML = `Duración del video: ${formatTime(video.duration)}`;
  }, 100);

  // Reproducir el video al hacer clic en el botón de reproducción
  playButton.addEventListener('click', () => {
    video.play();
  });

  // Pausar el video al hacer clic en el botón de pausa
  pauseButton.addEventListener('click', () => {
    video.pause();
  });

  // Función para formatear el tiempo en segundos a formato 'mm:ss'
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = Math.floor(seconds % 60);
    return `${minutes}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
  }

  // Actualiza el tiempo actual del video en la consola cada segundo
  setInterval(() => {
    console.log(`Tiempo actual del video: ${formatTime(video.currentTime)}`);
  }, 1000);
});


// pagina 3

// Función para permitir soltar
function permitirSoltar(event) {
  event.preventDefault();
}

// Función para arrastrar el elemento
function comenzarArrastre(event) {
  event.dataTransfer.setData("text", event.target.id);
}

// Función para soltar el elemento
function soltar(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var elementoArrastrado = document.getElementById(data);
  var elementoDestino = event.target;

  // Reemplazar el contenido del elemento de destino con el elemento arrastrado
  elementoDestino.innerHTML = '';
  elementoDestino.appendChild(elementoArrastrado);
  elementoDestino.style.pointerEvents = "none";
}

// Función para agregar arrastrar y soltar a las imágenes
function habilitarArrastrarYSoltar(idImagen) {
  var elementoImagen = document.getElementById(idImagen);
  elementoImagen.setAttribute("draggable", "true");
  elementoImagen.addEventListener("dragstart", comenzarArrastre);
}

// Agregar el evento de inicio a la funcion habilitarArrastrarYsoltar de las imágenes
habilitarArrastrarYSoltar("imagen1");
habilitarArrastrarYSoltar("imagen2");
habilitarArrastrarYSoltar("imagen3");

// Agregar los eventos de soltar a los elementos de destino
var elementosSoltar = document.querySelectorAll("#soltar1, #soltar2, #soltar3");
elementosSoltar.forEach(function (elementoSoltar) {
  elementoSoltar.addEventListener("drop", soltar);
  elementoSoltar.addEventListener("dragover", permitirSoltar);

});

function reinicio() {
    window.location.reload();
}


