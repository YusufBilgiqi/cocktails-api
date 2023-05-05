const cocktailSection = document.querySelector(".cocktail-section");

async function fetchCocktails(url) {
  try {
    const resp = await fetch(url);
    const data = await resp.json();

    return data.drinks;
  } catch (error) {
    cocktailSection.innerHTML = `We couldn't fetch the data, please fix the error.`;
  }
}
export default fetchCocktails;
