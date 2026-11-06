/* =================================================
   VERDURE – accueil.js
   Page index.html : catalogue, recherche, filtre, panier.
   Défis : J01, J02, J04, J06, J07, J08, J09, J10, J13
   Le tableau des plantes s'appelle « plantes » (voir plantes.js).
   ================================================= */

const nbPlantes = document.querySelector("#nb-plantes")

if (nbPlantes) {
   nbPlantes.textContent = plantes.length;
}

const catalogue = document.querySelector("#catalogue")

if (catalogue) {
   plantes.forEach(plante => {
      
      const article = document.createElement("article");
      article.classList.add("plante");
      article.dataset.planteId = plante.id;

      const lien = document.createElement("a");
      lien.href = `plante.html?id=${plante.id}`;
      lien.textContent = "Voir la fiche";
      
      const titre = document.createElement("h3");
      titre.textContent = plante.nom;
      const boutonPanier = document.createElement("button");
      boutonPanier.textContent = "Ajouter au panier";
      
      const prix = document.createElement("p");
      prix.textContent = euros(plante.prix);
      article.append(titre, prix, lien, boutonPanier);
      catalogue.append(article);

      boutonPanier.addEventListener("click", () => {
         const panier = document.querySelector("#panier-lignes");
         const li = document.createElement("li");
         const cptPanier = document.querySelector("#compteur-panier");
         li.textContent = `${plante.nom}`;
         li.dataset.ligneId = plante.id;
         cptPanier.textContent = parseInt(cptPanier.textContent) + 1;

         panier.append(li);
      });
   });
}