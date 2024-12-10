// Create a function named changeMode
function changeMode(size, weight, transform, background, color) {
  // Using closure, change the style of the entire page
  return function () {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

// Write a function named main
function main() {
  // Set variables with different themes using changeMode
  var spooky = changeMode(12, "bold", "uppercase", "pink", "green");
  var darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  var screamMode = changeMode(12, "blod", "lowercase", "white", "black");

  // Add a paragraph to the body with the text Welcome Holberton!
  var welcomeParagraph = document.createElement("p");
  welcomeParagraph.textContent = "Welcome!";
  document.body.appendChild(welcomeParagraph);

  // Add buttons to the body with different text
  var spookyButton = document.createElement("button");
  spookyButton.textContent = "Spooky";
  document.body.appendChild(spookyButton);

  var darkModeButton = document.createElement("button");
  darkModeButton.textContent = "Dark mode";
  document.body.appendChild(darkModeButton);

  var screamModeButton = document.createElement("button");
  screamModeButton.textContent = "Scream mode";
  document.body.appendChild(screamModeButton);

  // When clicking on each button, change the page CSS to the different themes
  spookyButton.addEventListener("click", spooky);
  darkModeButton.addEventListener("click", darkMode);
  screamModeButton.addEventListener("click", screamMode);
}

main();
