const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".card");
const filterButtons = document.querySelectorAll(".filter-btn");
const scrollTopBtn = document.getElementById("scrollTopBtn");

let currentFilter = "all";

/**
 * Updates the product grid based on search input and active category filter.
 */
function updateCatalog() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  productCards.forEach((card) => {
    const productName = card.dataset.name.toLowerCase();
    const productCategory = card.dataset.category.toLowerCase();

    const matchesSearch = productName.includes(searchTerm);
    const matchesFilter = currentFilter === "all" || productCategory === currentFilter;

    if (matchesSearch && matchesFilter) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// Event listener for real-time search
searchInput.addEventListener("input", updateCatalog);

// Event listeners for category filtering
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // UI: Update active button state
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Logic: Update filter and refresh view
    currentFilter = button.dataset.filter;
    updateCatalog();
  });
});

// Show/Hide "Scroll to Top" button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

// Smooth scroll to top functionality
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
