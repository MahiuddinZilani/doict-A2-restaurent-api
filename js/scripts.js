const defaultURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function loadAllMeals() {
  fetch(defaultURL)
    .then((res) => res.json())
    .then((data) => showMeals(data.meals));
}
function selectCategory(e) {
  const categoryName = e.innerText;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${categoryName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showMeals(data.meals));
  //   console.log();
}

loadAllMeals();

function showMeals(data) {
  const parentDiv = document.getElementById("load-meals-container");
  parentDiv.innerHTML = "";

  data.forEach((element) => {
    console.log(element?.strMeal);
    const childDiv = document.createElement("div");
    childDiv.classList.add("card", "image-full");
    childDiv.innerHTML = `
                <figure>
                    <img
                        src=${element?.strMealThumb}
                        alt="Shoes"
                    />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${element?.strMeal}</h2>
                    <p> </p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Details</button>
                    </div>
                </div>       
    `;
    parentDiv.appendChild(childDiv);
  });
}

// function loadCategoryMeal (){
//     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`).
// }
