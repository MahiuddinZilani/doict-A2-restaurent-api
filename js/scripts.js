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
    .then((data) => showMeals(data.meals, categoryName));
  //   console.log();
}

loadAllMeals();

function showMeals(data, e) {
  console.log(Array.isArray(data));
  console.log(data, e);
  const parentDiv = document.getElementById("load-meals-container");
  const showError = document.getElementById("show-error");
  parentDiv.innerHTML = "";
  showError.innerHTML = "";

  if (data === null) {
    const childDiv = document.createElement("div");
    childDiv.classList.add(
      "text-center",
      "font-bold",
      "text-2xl",
      "w-full",
      "bg-[#E83F96]",
      "py-8",
      "rounded-lg",
      "text-white"
    );
    childDiv.innerHTML = ` <p> Sorry! ${e} is not available right now. <p>`;
    showError.appendChild(childDiv);
  } else {
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
}

// function loadCategoryMeal (){
//     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`).
// }
