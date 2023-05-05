// selectors

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

// functions

async function fetchCocktails(url) {
  try {
    const resp = await fetch(url);
    const data = await resp.json();

    return data.drinks;
  } catch (error) {
    cocktailSection.innerHTML = `We couldn't fetch the data, please fix the error.`;
  }
}

const displayDrink = (data) => {
  const drink = data[0];
  // console.log(drink);
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  //   console.log(name, desc);
  const list = [
    drink.strIngredent4,
    drink.strIngrediient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient5,
  ];
  const img = document.querySelector(".drink-img");
  const drinkTitle = document.querySelector(".drink-title");
  const drinkPrep = document.querySelector(".drink-prep");
  const ingredients = document.querySelector(".ingredients");
  img.src = image;
  document.title = name;
  drinkPrep.textContent = desc;
  drinkTitle.textContent = name;
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) {
        return;
      } else {
        return `<li><i class="fa-solid fa-square-check"></i>${item} </li>`;
      }
    })
    .join("");
  return ``;
};

const presentDrink = async () => {
  const id = localStorage.getItem("drink");
  // console.log(id);
  if (!id) {
    window.location.replace = "./index.html";
  } else {
    const drink = await fetchCocktails(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    displayDrink(drink);
  }
};

window.addEventListener("DOMContentLoaded", presentDrink);
