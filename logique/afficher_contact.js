(async () => {
  const res = await fetch("api/contact.json");
  const data = await res.json();
  for (let contact of data) {
    document.querySelector(".liste-contact").innerHTML += ` 
        <a href="${contact.lien} target="_blank">
         <img src="${contact.image}" alt="${contact.titre}"
        </a>
     `;
  }
})();
