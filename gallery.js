
  // Slider Functionality
  const gallerySlider = document.querySelector(".gallery-slider");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");

  nextBtn.addEventListener("click", () => {
    gallerySlider.scrollBy({ left: 500, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    gallerySlider.scrollBy({ left: -500, behavior: "smooth" });
  });

  // Lightbox Preview Functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close-btn");
  const galleryImages = document.querySelectorAll(".gallery-img");

  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Close when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  const tripHeading = document.querySelector('.trip-heading');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tripHeading.classList.add('visible');
        observer.unobserve(tripHeading);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(tripHeading);



