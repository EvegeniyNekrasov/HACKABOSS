/* 
  Autor: Evgeniy A. Nekrasov
  Centro: BOOTCAMP HACKABOSS
  Fecha: 09_03_22
*/

// colors list
const colors = ["red", "blue", "green", "yellow", "brown", "violet", "azure"];
const container = document.querySelector(".flex-container");
const element = document.querySelectorAll(".element");
const button = document.querySelector(".btn");

button.addEventListener('click', () => {
  const newElement = document.createElement("div");
  // newElement.className = "element";
  newElement.classList.add("element");
  container.append(newElement);
});

function setBackgroundColor () {
  for(let i = 0; i < element.length; i++) {
    element[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }
};

const loop = setInterval(setBackgroundColor, 500);

