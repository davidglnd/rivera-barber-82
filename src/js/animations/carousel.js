const carousel = document.getElementById("carousel");
  const slides = carousel.children;
  const indicators = document.querySelectorAll("[data-index]");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let currentIndex = 0;
  let interval;

  function updateCarousel(index) {
    currentIndex = (index + slides.length) % slides.length;
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;

    indicators.forEach((btn, i) => {
      btn.classList.toggle("opacity-100", i === currentIndex);
      btn.classList.toggle("opacity-50", i !== currentIndex);
    });
  }

  function startAutoplay() {
    interval = setInterval(() => updateCarousel(currentIndex + 1), 3000);
  }

  function stopAutoplay() {
    clearInterval(interval);
  }

  indicators.forEach(btn => {
    btn.addEventListener("click", () => {
      stopAutoplay();
      updateCarousel(parseInt(btn.dataset.index));
      startAutoplay();
    });
  });

  prevBtn.addEventListener("click", () => {
    stopAutoplay();
    updateCarousel(currentIndex - 1);
    startAutoplay();
  });

  nextBtn.addEventListener("click", () => {
    stopAutoplay();
    updateCarousel(currentIndex + 1);
    startAutoplay();
  });

  // 👉 SWIPE SUPPORT
  let startX = 0;
  let isDragging = false;

  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  carousel.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
      stopAutoplay();
      if (diff > 0) {
        updateCarousel(currentIndex - 1); // swipe derecha
      } else {
        updateCarousel(currentIndex + 1); // swipe izquierda
      }
      startAutoplay();
      isDragging = false;
    }
  });

  carousel.addEventListener("touchend", () => {
    isDragging = false;
  });

  // init
  updateCarousel(0);
  startAutoplay();