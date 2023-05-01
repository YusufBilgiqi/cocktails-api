// selectors

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
// const singleCocktail = document.querySelector(".single-cocktail");
// const cocktailImg = document.querySelectorAll(".cocktail-img");
// const cocktailName = document.querySelectorAll(".cocktail-name");
const form = document.querySelector(".input-form");
const searchInput = document.getElementById("searchInput");

// // eventListeners

// async function fetchCocktails() {
//   try {
//     const resp = await fetch(url);
//     const data = await resp.json();

//     return data.drinks;
//   } catch (error) {
//     cocktailSection.innerHTML = `We couldn't fetch the data, please fix the error.`;
//   }
// }

// async function displayCocktails(cocktail) {
//   let cocktailsElements = await cocktail
//     .map((drink) => {
//       const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
//       console.log(id);
//       return `<article class="single-cocktail" data-id="${id}" >
//        <a href="">
//        <img class="cocktail-img" src="${image}" alt="cocktail" />
//      </a>
//      <h2 class="cocktail-name">${name} </h2>
//     </article>`;
//     })
//     .join("");
//   cocktailSection.innerHTML = cocktailsElements;
// }

// const setDrink = (section) => {
//   section.addEventListener("click", function (e) {
//     // prevent navigation to new page
//     e.preventDefault();
//     let article = e.target.closest("article");
//     const id = article.dataset.id;
//     // console.log(id);

//     // Set id to localstorage
//     localStorage.setItem("drink", id);
//     window.location.href = "./drink.html";
//   });
// };

// window.addEventListener("DOMContentLoaded", start);

// async function start() {
//   const data = await fetchCocktails();
//   const section = await displayCocktails(data);
//   if (section) {
//     setDrink(section);
//   }
// }

const fetchDrinks = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data.drinks;
  } catch (error) {
    return `We are not able to fetch the data"`;
  }
};
fetchDrinks();

const displayCocktails = async (data) => {
  const section = document.querySelector(".cocktail-section");

  if (!data) {
    section.innerHTML = null;
  }
  let drink = data
    .map((item) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = item;

      return `<article class="single-cocktail" data-id=${id}>
    <a href="">
    <img class="cocktail-img" src="${image} " alt="cocktail" />
  </a>
  <h2 class="cocktail-name">${name} </h2>
</div>
</article>`;
    })
    .join("");

  section.innerHTML = drink;
  return section;
};

const start = async () => {
  const data = await fetchDrinks();
  const section = await displayCocktails(data);
  console.log(section);
  if (section) {
    storage(section);
  }
};
start();

const storage = (section) => {
  section.addEventListener("click", (e) => {
    e.preventDefault();

    let article = e.target.closest("article");
    const id = article.dataset.id;
    localStorage.setItem("drink", id);
    window.location.href = "./drink.html";
  });
};
