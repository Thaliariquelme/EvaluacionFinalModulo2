document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carouselAmenazas');

  document.querySelectorAll('[data-bs-target="#modalAmenazas"]').forEach(card => {
    card.addEventListener('click', () => {
      const slideIndex = parseInt(card.getAttribute('data-bs-slide-to'));
      const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);
      bsCarousel.to(slideIndex);
    });
  });
});
