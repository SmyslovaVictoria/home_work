const itemsEl = document.querySelectorAll(".item");
console.log("Number of categories: ", itemsEl.length);

itemsEl.forEach(myFunction);

function myFunction(category) {
    const categoryTitleEl = category.firstElementChild;
    console.log("Category :", categoryTitleEl.textContent);

    const categoryListEl = categoryTitleEl.nextElementSibling;
    console.log("Elements: ", categoryListEl.childElementCount);
}



