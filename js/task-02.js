const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector("#ingredients");

const li = document.createElement("li");

const markup = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`).join('');

  ulIngredients.innerHTML = markup;