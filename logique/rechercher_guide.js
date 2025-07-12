searchBar.addEventListener("input", () => {
  document.querySelectorAll(".carte").forEach((card) => {
    card.style.display =
      card
        .querySelector("h3")
        .textContent.toLowerCase()
        .includes(searchBar.value.toLowerCase()) ||
      card
        .querySelector("p")
        .textContent.toLowerCase()
        .includes(searchBar.value.toLowerCase())
        ? "block"
        : "none";
  });
});
