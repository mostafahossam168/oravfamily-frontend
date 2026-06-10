function toggleMenu() {
  const m = document.querySelector(".nav-menu");
  if (m) m.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const m = document.querySelector(".nav-menu");
  if (m) {
    m.addEventListener("click", (e) => {
      if (e.target.tagName === "A") m.classList.remove("active");
    });
    window.addEventListener("scroll", () => {
      if (m.classList.contains("active")) m.classList.remove("active");
    });
  }
});

function toggleFaq(el) {
  const item = el.closest(".faq-item");
  const isOpen = item.classList.contains("open");
  document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
  if (!isOpen) item.classList.add("open");
}
