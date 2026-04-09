const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const filterButtons = document.querySelectorAll(".filter-btn");
const scrollTopBtn = document.getElementById("scrollTopBtn");

let currentFilter = "all";

function updateCatalog() {
  const searchValue = searchInput.value.toLowerCase().trim();

  cards.forEach((card) => {
    const name = card.dataset.name.toLowerCase();
    const category = card.dataset.category.toLowerCase();

    const matchesSearch = name.includes(searchValue);
    const matchesFilter = currentFilter === "all" || category === currentFilter;

    if (matchesSearch && matchesFilter) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

searchInput.addEventListener("input", updateCatalog);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    updateCatalog();
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
