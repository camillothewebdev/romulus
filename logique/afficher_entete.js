document.body.innerHTML += ` 
<header>
   <ul>
      <li><a href="index.html">Accueil</a></li>
      <li><a href="Cours.html">Cours</a></li>
      <li><a href="Guide.html">Guide</a></li>
      <li><a href="Contact.html">Contact</a></li>
    </ul>
</header>
`;
for (let lien of document.querySelectorAll("header a")) {
  if (location.pathname.split("/")[1] == lien.getAttribute("href")) {
    lien.classList.add("Active");
  }
}
