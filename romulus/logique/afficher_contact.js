(async () => {
  const res = await fetch("api/contact.json");
  const data = await res.json();
  for (let contact of data) {
    document.querySelector(".liste").innerHTML += ` 
        <a class="contact" href="${contact.lien}" target="_blank">
         <img class="image" src="${contact.image}" alt="${contact.titre}"
        </a>
     `;
  }
})();
