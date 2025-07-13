(async () => {
  const res = await fetch("api/cours.json");
  const data = await res.json();
  for (let cours of data) {
    document.querySelector(".liste").innerHTML += ` 
        <div class="cours">
            <p class="titre">${cours.titre}</p>
           <iframe src="https://www.youtube.com/embed/${cours.video}" frameborder="0" allowfullscreen></iframe>
            <a class="telecharger" href="${cours.pdf}" download>Télécharger le PDF</a>
        </div>
     `;
  }
})();
