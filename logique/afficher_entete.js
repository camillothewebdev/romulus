document.body.innerHTML += ` 
<header>
   <a href="index.html">Accueil</a>
   <a href="Cours.html">Cours</a>
   <a href="Guide.html">Guide</a>
   <a href="Contact.html">Contact</a>
</header>
`;
for (let lien of document.querySelectorAll("header a")) {
  if (location.pathname.split("/")[1] == lien.getAttribute("href")) {
    lien.classList.add("active");
  }
}
