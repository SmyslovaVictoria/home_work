function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const form = document.querySelector(".change-color").addEventListener("click", (e) => {
  console.log("Button was clicked");
  
  const body = document.querySelector("body");
  const span = document.querySelector(".color");

    if (e.currentTarget) {
      body.style.backgroundColor = getRandomHexColor();
      span.innerHTML = getRandomHexColor();
    }
  });

