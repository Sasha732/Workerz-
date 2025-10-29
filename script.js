// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 6000); // 6 seconds per slide

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
const cardSlider = document.getElementById("cardSlider");
const cardTrack = document.getElementById("cardTrack");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

nextBtn.addEventListener("click", () => {
  cardSlider.scrollBy({ left: cardSlider.offsetWidth, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  cardSlider.scrollBy({ left: -cardSlider.offsetWidth, behavior: "smooth" });
});

document.querySelectorAll(".service-card").forEach((card) => {
  const bg = card.getAttribute("data-bg");
  if (bg) {
    card.style.setProperty("--bg-image", `url(${bg})`);
    card.style.backgroundImage = "linear-gradient(145deg, #2b2b2b, #3a3a3a)";
    card.style.setProperty("--hover-image", `url(${bg})`);
    card.querySelector("::before");
  }
});
