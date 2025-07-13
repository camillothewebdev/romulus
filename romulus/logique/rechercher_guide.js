txt_recherche.addEventListener("input", () => {
  document.querySelectorAll(".guide").forEach((guide) => {
    guide.style.display =
      guide
        .querySelector(".titre")
        .textContent.toLowerCase()
        .includes(txt_recherche.value.toLowerCase()) ||
      guide
        .querySelector(".contenu")
        .textContent.toLowerCase()
        .includes(txt_recherche.value.toLowerCase())
        ? "block"
        : "none";
  });
});
