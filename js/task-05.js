const input = document.querySelector('#name-input');
const nameInp = document.querySelector("#name-output");

input.addEventListener("input", (event) => 
{
    event.preventDefault();
    
    nameInp.textContent = event.currentTarget.value;

    if (event.currentTarget.value === "") {
        nameInp.textContent = "Anonymous";
    }
})