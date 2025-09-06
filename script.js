const button = document.getElementById("change-text");
const dynamicText = document.getElementById("dynamic-text");

button.addEventListener("click", () => {
  dynamicText.textContent = "Thank you for visiting my website.";
  });