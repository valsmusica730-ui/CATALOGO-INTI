const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {
  const value = this.value.toLowerCase();

  cards.forEach((card) => {
    const name = card.getAttribute("data-name").toLowerCase();
    card.style.display = name.includes(value) ? "block" : "none";
  });
});
