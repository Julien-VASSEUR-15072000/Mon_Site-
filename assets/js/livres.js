const disparitionSynopsis = document.querySelector(".disparitionSynopsis");
const maj = document.querySelector(".maj");
const stats = document.querySelector(".stats");
const MHP1__p = document.querySelector(".MHP1__p");
const degage = document.querySelector(".degage");
const aLien = document.querySelectorAll(".aLien");
const moove = document.querySelector(".moove");
let compteurImpaire = 0;
let delai = 300;

console.log(maj);

maj.addEventListener("click", (e) => {
  maj.classList.toggle("majAbsolute");
  disparitionSynopsis.classList.toggle("disparitionSynopsis1");
  stats.classList.toggle("stats1");
  MHP1__p.classList.toggle("MHP1__p1");
  degage.classList.toggle("degage1");
  moove.classList.toggle("aLien1");
  maj.classList.add("pointerNone");
  compteurImpaire++;

  console.log(compteurImpaire);

  setTimeout(function () {
    maj.classList.remove("pointerNone");
  }, 300);

  if (compteurImpaire % 2 === 1) {
    moove.addEventListener("mouseenter", handleMouseEnter);
    moove.addEventListener("mouseout", handleMouseOut);

    maj.addEventListener("mouseenter", () => {
      maj.classList.remove("majHover");
      maj.classList.add("majAbsoluteHover");
    });
    maj.addEventListener("mouseout", () => {
      maj.classList.remove("majAbsoluteHover");
      maj.classList.remove("majHover");
    });
  } else {
    maj.classList.remove("majAbsoluteHover");
    maj.addEventListener("mouseenter", () => {
      maj.classList.add("majHover");
    });
    maj.addEventListener("mouseout", () => {
      maj.classList.remove("majHover");
    });
    moove.classList.remove("transform3");
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

maj.addEventListener("mouseenter", () => {
  maj.classList.add("majHover");
});
maj.addEventListener("mouseout", () => {
  maj.classList.remove("majHover");
});

function handleMouseEnter() {
  moove.classList.add("transform3");
}

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
