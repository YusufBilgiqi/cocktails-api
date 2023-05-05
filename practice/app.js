// selectors

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

const form = document.querySelector(".input-form");
const value = document.getElementById("searchInput");

const fetchCocktails = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    return data.drinks;
  } catch (error) {
    return `Not able to fetch data...`;
  }
};

const displayDrink = (drinks) => {
  let section = document.querySelector(".cocktail-section");
  if (!section) {
    section.innerHTML = null;
  }
  const singleDrink = drinks
    .map((item) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = item;
      return `<article class="single-cocktail" data-id="${id} " >
    <a href="">
    <img class="cocktail-img" src="${image} " alt="cocktail" />
    <h2 class="cocktail-name">${name} </h2>
  </a>
</article>`;
    })
    .join("");
  section.innerHTML = singleDrink;
  return section;
};

const savetoLocalstorage = (section) => {
  section.addEventListener("click", (e) => {
    e.preventDefault();
    const article = e.target.closest("article");
    const id = article.dataset.id;

    localStorage.setItem("drink", id);
    window.location.href = "./drink.html";
  });
};

const start = async () => {
  const data = await fetchCocktails();
  const section = displayDrink(data);
  if (section) {
    savetoLocalstorage(section);
  }
};

window.addEventListener("DOMContentLoaded", start);

// const fetchDrinks = async () => {
//   try {
//     const resp = await fetch(url);
//     const data = await resp.json();
//     console.log(data);
//     return data.drinks;
//   } catch (error) {
//     return `Unable to fetch....`;
//   }
// };
// fetchDrinks();

// const displayDrinks = (drinks) => {
//   const section = document.querySelector(".cocktail-section");
//   if (!section) {
//     section.innerHTML = null;
//   }
//   const cocktails = drinks
//     .map((drink) => {
//       const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

//       return ` <article class="single-cocktail" data-id="${id} ">
//     <a href="">
//     <img class="cocktail-img" src="${image} " />
//   </a>
//   <h2 class="cocktail-name">${name} </h2>
// </div>
// </article>`;
//     })
//     .join("");
//   section.innerHTML = cocktails;
//   return section;
// };

// const storageDrinks = (section) => {
//   section.addEventListener("click", (e) => {
//     e.preventDefault();
//     const article = e.target.closest("article");
//     const id = article.dataset.id;

//     localStorage.setItem("drink", id);
//     window.location.href = "./drink.html";
//   });
// };

// const start = async () => {
//   const data = await fetchDrinks();
//   const section = displayDrinks(data);
//   if (section) {
//     storageDrinks(section);
//   }
// };
// window.addEventListener("DOMContentLoaded", start);
