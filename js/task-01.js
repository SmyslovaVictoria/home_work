const categories = document.querySelector('#categories');
const items = document.querySelectorAll('li.item')

const categoriesQuantity = categories.children.length;
console.log("Number of categories:", categoriesQuantity);

[...items].forEach((i) => {

  const itemTitle = i.querySelector("h2");

  const titleCategory = itemTitle.textContent;

  const categoryItems = i.querySelectorAll("li").length;

    console.log("Category:", titleCategory);
    console.log("Elements:", categoryItems);
    
});