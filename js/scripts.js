const defaultURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
loadAllMeals();

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

function showMeals(data, e = "All") {
  const category = document.getElementById("category");
  category.innerHTML = "";
  const categoryName = document.createElement("p");
  categoryName.innerText = e;
  category.appendChild(categoryName);

  const parentDiv = document.getElementById("load-meals-container");
  const showError = document.getElementById("show-error");

  parentDiv.innerHTML = "";
  showError.innerHTML = "";

  parentDiv.classList.add(
    "w-4/5",
    "md:w-full",
    "mx-auto",
    "grid",
    "md:grid-cols-2",
    "lg:grid-cols-4",
    "gap-2",
    "lg:gap-4"
  );

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
      //   console.log(element?.strMeal);
      const childDiv = document.createElement("div");
      childDiv.classList.add();
      childDiv.innerHTML = `
                <div class="card card-compact h-64 lg:w-auto bg-[#E83F96] text-white shadow-xl">
                    <figure>
                        <img
                        src=${element?.strMealThumb}
                        alt="Meal" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">${element?.strMeal}</h2>
                        <p>If a dog </p>
                    </div>
                </div>
        `;
      parentDiv.appendChild(childDiv);
    });
  }
}
