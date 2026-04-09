const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const filterButtons = document.querySelectorAll(".filter-btn");

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
