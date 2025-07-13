(async () => {
  const res = await fetch("api/guide.json");
  const data = await res.json();
  for (let guide of data) {
    document.querySelector(".liste").innerHTML += ` 
       <div class="guide" onclick="window.open('${guide.lien}', '_blank')">
            <img class="image" src="${guide.image}" alt="${guide.titre}"/>
            <h3 class="titre">${guide.titre}</h3>
            <p class="contenu">${guide.contenu}</p>
        </div>
     `;
  }
})();
