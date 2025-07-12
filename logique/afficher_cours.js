(async()=> {
  const res = await fetch("api/cours.json");
  const data = await res.json();
  for (let cours of data) {
    document.querySelector(".liste-cours").innerHTML += ` 
        <div class="course-card">
            <h3>${cours.titre}</h3>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/${cours.video}" frameborder="0" allowfullscreen></iframe>
            <a href="${cours.pdf}" download>Télécharger le PDF</a>
        </div>
     `;
  }
})();

