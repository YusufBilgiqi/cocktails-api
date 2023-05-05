const storageDrinks = (section) => {
  section.addEventListener("click", (e) => {
    e.preventDefault();
    const article = e.target.closest("article");
    const id = article.dataset.id;

    localStorage.setItem("drink", id);
    window.location.href = "./drink.html";
  });
};

export default storageDrinks;
