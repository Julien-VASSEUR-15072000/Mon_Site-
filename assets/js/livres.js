const disparitionSynopsis = document.querySelector(".disparitionSynopsis");
const maj = document.querySelector(".maj");
const stats = document.querySelector(".stats");
const MHP1__p = document.querySelector(".MHP1__p");
const degage = document.querySelector(".degage");
const aLien = document.querySelectorAll(".aLien");
const moove = document.querySelector(".moove");
let merde = 0;

console.log(maj);

maj.addEventListener("click", (e) => {
  maj.classList.toggle("majAbsolute");
  disparitionSynopsis.classList.toggle("disparitionSynopsis1");
  stats.classList.toggle("stats1");
  MHP1__p.classList.toggle("MHP1__p1");
  degage.classList.toggle("degage1");
  moove.classList.toggle("aLien1");
  merde++;
  console.log(merde);

  // Nettoyer les écouteurs d'événements
  moove.removeEventListener("mouseenter", handleMouseEnter);
  moove.removeEventListener("mouseout", handleMouseOut);

  if (merde % 2 === 1) {
    // Ajouter les nouveaux écouteurs d'événements
    moove.addEventListener("mouseenter", handleMouseEnter);
    moove.addEventListener("mouseout", handleMouseOut);
  } else {
    // Retirer les classes transform3 si merde est pair
    moove.classList.remove("transform3");

    // Ajouter les nouveaux écouteurs d'événements pour les éléments aLien
    aLien.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.classList.add("transform2");
      });
      element.addEventListener("mouseout", () => {
        element.classList.remove("transform2");
      });
    });
  }
});

// Fonction à utiliser pour l'événement "mouseenter"
function handleMouseEnter() {
  moove.classList.add("transform3");
}

// Fonction à utiliser pour l'événement "mouseout"
function handleMouseOut() {
  moove.classList.remove("transform3");
}

aLien.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.classList.add("transform1");
  });
});

aLien.forEach((element) => {
  element.addEventListener("mouseout", () => {
    element.classList.remove("transform1");
  });
});

aLien.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.classList.add("transform2");
  });
});

aLien.forEach((element) => {
  element.addEventListener("mouseout", () => {
    element.classList.remove("transform2");
  });
});

// si je voulais le faire pour tous à la fois :
// aLien.forEach((element) => {
//     element.addEventListener("mouseenter", () => {
//       aLien.forEach((item) => {
//         item.classList.add("transform1");
//       });
//     });
//   });
// Exemple direct avec un nombre
