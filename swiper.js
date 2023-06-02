document.addEventListener('DOMContentLoaded', function() {
    let images = document.querySelectorAll('.slider img');
    let currentIndex = 0;
  
    function showNextImage() {
      images[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.display = 'block';
    }
  
    setInterval(showNextImage, 2000); // Cambia de imagen cada 3 segundos (3000 milisegundos)
  
    // Mostrar la primera imagen
    images[currentIndex].style.display = 'block';
  });

// Agregaremos el texto arriba de la imagen 

const header = document.querySelector('header');

const textoHeader = document.createElement('h1');
textoHeader.textContent = 'Cotiza el seguro de tu auto';
textoHeader.classList.add('texto-img');
// insetar h1 en header
header.appendChild(textoHeader);







