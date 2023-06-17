const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

decrement.addEventListener("click", handleDecrement);
increment.addEventListener("click", handleIncrement);

let counterValue = 0;

function handleIncrement() {
    counterValue ++; 
    value.innerHTML = `${counterValue}`;
};
 
function handleDecrement() {
        counterValue--;
        value.innerHTML = `${counterValue}`;
};


