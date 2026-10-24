const button = document.getElementById("myButton");
const message = document.getElementById("message");

let count = 0;

button.onclick = function () {
  count = count + 1;

  if (count >= 5) {
    message.textContent = "Wow, " + count + " clicks! You're on a roll!";
  } else {
    message.textContent = "You clicked " + count + " times.";
  }
};

const themeButton = document.getElementById("themeButton");

themeButton.onclick = function () {
  document.body.classList.toggle("dark");
};