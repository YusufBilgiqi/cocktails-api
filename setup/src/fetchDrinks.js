// import showDrinks from "./presentDrinks.js";

import { showLoading } from "./toggleLoading.js";

const fetchDrinks = async (url) => {
    showLoading();
    try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
    } catch (error) {
    //  console.log(error);
    }
};

export default fetchDrinks;