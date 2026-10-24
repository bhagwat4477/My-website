const themeButton = document.getElementById("themeButton");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

themeButton.onclick = function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};