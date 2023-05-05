const displayCocktails = (drinks) => {
  const section = document.querySelector(".cocktail-section");
  if (!section) {
    section.innerHTML = null;
  }
  const cocktails = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

      return ` <article class="single-cocktail" data-id="${id} ">
      <a href="">
      <img class="cocktail-img" src="${image} " />
    </a>
    <h2 class="cocktail-name">${name} </h2>
  </div>
  </article>`;
    })
    .join("");
  section.innerHTML = cocktails;
  return section;
};

export default displayCocktails;
