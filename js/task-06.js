const inputCheck = document.querySelector("#validation-input");

inputCheck.addEventListener("blur", onLostFocus);

function onLostFocus(event) {
    inputCheck.classList.remove("invalid");
    if (inputCheck.value.length === Number (inputCheck.dataset.length)) {
        inputCheck.classList.add("valid");
    } else {
        inputCheck.classList.add("invalid");
    }
}

