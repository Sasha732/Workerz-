// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".join-heading");

  if (heading) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heading.classList.add("visible");
            observer.unobserve(heading); // triggers only once
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(heading);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const popUps = document.querySelectorAll(".pop-up");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    },
    { threshold: 0.3 }
  );
  popUps.forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll(".pop-up-text, .pop-up-subtext")
    .forEach((el) => observer.observe(el));
});
// Handle CV Upload Preview
const cvInput = document.getElementById("cvUpload");
const fileName = document.getElementById("fileName");

cvInput.addEventListener("change", function () {
  if (this.files && this.files.length > 0) {
    fileName.textContent = this.files[0].name;
  } else {
    fileName.textContent = "No file chosen";
  }
});
// Office Gallery Slider
const gallerySlider = document.querySelector(".gallery-slider");
const galleryTrack = document.querySelector(".gallery-track");
const galleryPrevBtn = document.querySelector(".office-gallery .prev-btn");
const galleryNextBtn = document.querySelector(".office-gallery .next-btn");

// Ensure elements exist
if (gallerySlider && galleryTrack && galleryPrevBtn && galleryNextBtn) {
  galleryNextBtn.addEventListener("click", () => {
    gallerySlider.scrollBy({
      left: gallerySlider.offsetWidth,
      behavior: "smooth",
    });
  });

  galleryPrevBtn.addEventListener("click", () => {
    gallerySlider.scrollBy({
      left: -gallerySlider.offsetWidth,
      behavior: "smooth",
    });
  });
}

// Fullscreen Preview
const images = document.querySelectorAll(".gallery-img");
const preview = document.getElementById("imgPreview");
const previewImg = document.getElementById("previewImg");
const closePreview = document.querySelector(".close-preview");

if (images && preview && previewImg && closePreview) {
  images.forEach((img) => {
    img.addEventListener("click", () => {
      preview.style.display = "block";
      previewImg.src = img.src;
    });
  });

  closePreview.addEventListener("click", () => {
    preview.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === preview) {
      preview.style.display = "none";
    }
  });
}
