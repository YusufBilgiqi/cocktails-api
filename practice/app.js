// selectors

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
const cocktailImg = document.querySelectorAll(".cocktail-img");
const cocktailName = document.querySelectorAll(".cocktail-name");
const cocktailSection = document.querySelector(".cocktail-section");
const form = document.querySelector(".input-form");
const searchInput = document.getElementById("searchInput");

// // eventListeners
window.addEventListener("DOMContentLoaded", start);

async function fetchCocktails() {
  try {
    const resp = await fetch(url);
    const data = await resp.json();

    return data.drinks;
  } catch (error) {
    cocktailSection.innerHTML = `We couldn't fetch the data, please fix the error.`;
  }
}

async function displayCocktails(cocktail) {
  let cocktailsElements = await cocktail.map((drink) => {
    const { strDrink: id, strDrinkThumb: image } = drink;
    return `<article class="single-cocktail">
       <a href="">
       <img class="cocktail-img" src="${image}" alt="cocktail" />
     </a>
     <h2 class="cocktail-name">${id} </h2>
    </article>`;
  });
  cocktailSection.innerHTML = cocktailsElements.join("");

  // filter function
  // filter function
  form.addEventListener("keyup", () => {
    const inputValue = searchInput.value.toLowerCase();
    const filteredProducts = cocktailsElements.filter((product) => {
      const title = product
        .match(/<h2 class="cocktail-name">(.+)<\/h2>/i)[1]
        .toLowerCase();
      return title.includes(inputValue);
    });
    cocktailSection.innerHTML = filteredProducts.join("");
  });
}

async function start() {
  const data = await fetchCocktails();
  displayCocktails(data);
  //   searchCocktailsByName(data);
}
start();
