/* =================================================
   VERDURE – fiche.js
   Page plante.html : la fiche d'une plante, choisie par l'URL.
   Défi : J05
   Astuce : idDansURL() (dans commun.js) donne l'id de la plante,
   et plantes.find(...) permet de retrouver l'objet correspondant.
   ================================================= */

const id = idDansURL();
const plante = plantes.find(p => p.id === id);

if (plante) {
   const nomEl = document.querySelector("#plante-nom");
   const prixEl = document.querySelector("#plante-prix");

  if (nomEl) nomEl.textContent = plante.nom;
  if (prixEl) prixEl.textContent = euros(plante.prix);
}