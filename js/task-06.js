const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
    if (input.value.length === 0 || input.value.length < 6) {
        input.classList.add("invalid");
    } else if (input.value.length > 6 || input.value.length === 6) {
      input.classList.replace("invalid", "valid");
    };

});




