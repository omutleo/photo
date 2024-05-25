document.addEventListener('DOMContentLoaded', function() {
  var slideIndex = 0;
  var slides = document.querySelector('.gallery-slide');
  var images = document.querySelectorAll('.gallery img');
  var prevBtn = document.querySelector('.prev');
  var nextBtn = document.querySelector('.next');

  function showSlide(index) {
    if (index >= images.length) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = images.length - 1;
    } else {
      slideIndex = index;
    }
    slides.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
  }

  prevBtn.addEventListener('click', function() {
    showSlide(slideIndex - 1);
  });

  nextBtn.addEventListener('click', function() {
    showSlide(slideIndex + 1);
  });

  // Автоматическое переключение слайдов каждые 5 секунд
  setInterval(function() {
    showSlide(slideIndex + 1);
  }, 5000);

  // Показ первого слайда
  showSlide(slideIndex);
});

