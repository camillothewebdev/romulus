(async()=> {
  const res = await fetch("api/guide.json");
  const data = await res.json();
  for (let guide of data) {
    document.querySelector(".cartes").innerHTML += ` 
       <div class="carte">
          <a
              href="${guide.lien}"
              target="_blank"
              class="lien-carte"
          >
            <img src="${guide.image}" alt="${guide.titre}"/>
            <h3>${guide.titre}</h3>
            <p>${guide.contenu}</p>
          </a>
        </div>
     `;
  }
})();

