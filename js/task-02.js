const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const makeIngredientsList = options => {
  return options.map(option => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = option;

    return liEl;
  });
}
const elements = makeIngredientsList (ingredients);
console.log(elements);
listEl.append(...elements)




// пробный вариант____________________________________

// const elements = [];

//   const elements = ingredients.map(ingredient => {
//     const liEl = document.createElement("li");
//     liEl.classList.add(".item");
//     liEl.textContent = ingredient;

//     return liEl;
//   });

// console.log(elements);
// liEl.append(...elements);

// ___________________________________________________

// const ingredientsList = ingredients.map((ingredient) => {
//   const liEl = document.createElement("li");
//   liEl.classList.add("item");
//   liEl.textContent = ingredient;

//   // console.log(liEl);
//   return liEl;
// });

// listEl.append(ingredientsList);
// console.log(listEl);