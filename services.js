// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// Wait for the page to load completely, then trigger the pop-up animation
document.addEventListener("DOMContentLoaded", () => {
  const introBox = document.querySelector(".intro-box");
  setTimeout(() => {
    introBox.classList.add("show");
  }, 200); // slight delay for smoother appearance
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
// Fade-in for service sections
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".service-section");
  const trigger = window.innerHeight * 0.8;

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) section.classList.add("visible");
  });
});
