import fetchDrinks from "./fetchCocktails.js";
import displayCocktails from "./displayCocktails.js";
import storageDrinks from "./storageDrinks.js";

const startDrinks = async () => {
  const data = await fetchDrinks();
  const section = displayCocktails(data);
  if (section) {
    storageDrinks(section);
  }
};

export default startDrinks;
