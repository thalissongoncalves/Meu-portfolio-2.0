// $(document).ready(function(){
//     $('.main-projects-cards-carousel').slick({
//       infinite: false,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000,
//     });
//   });

document.addEventListener("DOMContentLoaded", function () {
  // Selecione o elemento do carrossel
  const carousel = document.querySelector(".main-projects-cards-carousel");

  // Inicialize o carrossel usando o Slick Carousel
  $(carousel).slick({
      slidesToShow: 2, // Número de cards a serem exibidos de uma vez
      slidesToScroll: 1, // Número de cards a serem rolados por vez
      autoplay: true, // Autoplay do carrossel
      autoplaySpeed: 2000, // Velocidade do autoplay em milissegundos
      infinite: false,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          // Adicione mais breakpoints conforme necessário
      ]
  });
  
});
