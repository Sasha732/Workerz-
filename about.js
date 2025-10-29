// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("scroll", () => {
  const heading = document.querySelector(".intro-heading");
  if (!heading) return;

  const rect = heading.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 100) {
    heading.classList.add("visible");
  }
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

// Animate text pop-up on page load
document.addEventListener("DOMContentLoaded", () => {
  const popElements = document.querySelectorAll(".pop-up");
  popElements.forEach((el) => el.classList.add("show"));
});
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll(".leader-container")
    .forEach((el) => observer.observe(el));
});
