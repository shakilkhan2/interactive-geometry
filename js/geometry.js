// get the input value
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValueString = inputField.value;
  const inputValue = parseFloat(inputValueString);

  return inputValue;
}

// Area calculation: Triangle
const triangleArea = () => {
  const triangleBase = getInputValue("triangle-base");
  const triangleHeight = getInputValue("triangle-height");
  const errMsg = document.getElementById("err-field");
  if (
    isNaN(triangleBase) ||
    isNaN(triangleHeight) ||
    triangleBase <= 0 ||
    triangleHeight <= 0
  ) {
    errMsg.innerHTML = "Please provide valid value";
    errMsg.style.display = "block";
    document.getElementById("triangle-base").value = "";
    document.getElementById("triangle-height").value = "";
    return;
  }

  errMsg.innerHTML = "";
  errMsg.style.display = "none";

  const triangleArea = 0.5 * triangleBase * triangleHeight;
  console.log(triangleArea);

  const resultField = document.getElementById("result-field");
  const listItem = document.createElement("li");
  listItem.innerHTML = `Triangle area = ${triangleArea} cm<sup>2</sup>`;

  document.getElementById("triangle-base").value = "";
  document.getElementById("triangle-height").value = "";

  resultField.appendChild(listItem);
};

// Area calculation: Rectangle
const rectangleArea = () => {
  const rectangleWidth = getInputValue("rectangular-width");
  const rectanglelength = getInputValue("rectangular-length");

  // vadidation and displing error msg
  const errMsg = document.getElementById("err-field-2");
  if (
    isNaN(rectangleWidth) ||
    isNaN(rectanglelength) ||
    rectangleWidth <= 0 ||
    rectanglelength <= 0
  ) {
    errMsg.innerText = "Please provide valid input.";
    document.getElementById("rectangular-width").value = "";
    document.getElementById("rectangular-length").value = "";
    return;
  }
  errMsg.innerText = "";

  const rectangleArea = rectangleWidth * rectanglelength;

  const resultField = document.getElementById("result-field");
  const listItem = document.createElement("li");
  listItem.innerHTML = `Rectangle area = ${rectangleArea} cm<sup>2</sup>`;
  // clear the input field
  document.getElementById("rectangular-width").value = "";
  document.getElementById("rectangular-length").value = "";
  resultField.appendChild(listItem);
};

// Area Calculation parallelogram
const parallelogramAreaIs = () => {
  const parallelogramBase = getInputValue("parallelogram-base");
  const parallelogramHeight = getInputValue("parallelogram-height");

  // validation and display error msg
  const errfield = document.getElementById("err-field-3");
  if (
    isNaN(parallelogramBase) ||
    isNaN(parallelogramHeight) ||
    parallelogramBase <= 0 ||
    parallelogramHeight <= 0
  ) {
    errfield.innerText = "Please provide valid input.";

    document.getElementById("parallelogram-base").value = "";
    document.getElementById("parallelogram-height").value = "";
    return;
  }

  errfield.innerText = "";

  const parallelogramArea = parallelogramBase * parallelogramHeight;
  const resultField = document.getElementById("result-field");
  const listItem = document.createElement("li");
  listItem.innerHTML = `Parallelogram area = ${parallelogramArea} cm<sup>2</sup>`;
  resultField.appendChild(listItem);

  document.getElementById("parallelogram-base").value = "";
  document.getElementById("parallelogram-height").value = "";
};

// Area calculation rhombos
const rhombosAreaIs = () => {
  const rhombosDiagonal1 = getInputValue("rhombos-diagonal1");
  const rhombosDiagonal2 = getInputValue("rhombos-diagonal2");

  // validation and display error msg
  const errfield = document.getElementById("err-field-4");
  if (
    isNaN(rhombosDiagonal1) ||
    isNaN(rhombosDiagonal2) ||
    rhombosDiagonal1 <= 0 ||
    rhombosDiagonal2 <= 0
  ) {
    errfield.innerText = "Please provide valid input.";

    document.getElementById("rhombos-diagonal1").value = "";
    document.getElementById("rhombos-diagonal2").value = "";
    return;
  }

  errfield.innerText = "";

  const rhombosArea = 0.5 * rhombosDiagonal1 * rhombosDiagonal2;
  const resultField = document.getElementById("result-field");
  const listItem = document.createElement("li");
  listItem.innerHTML = `Rhombos area = ${rhombosArea} cm<sup>2</sup>`;
  resultField.appendChild(listItem);

  document.getElementById("rhombos-diagonal1").value = "";
  document.getElementById("rhombos-diagonal2").value = "";
};

// Area calculation Pentagon
const pentagonAreaIs = () => {
  const pentagonPerimeter = getInputValue("pentagon-p");
  const pentagonApothem = getInputValue("pentagon-a");

  // validation and display error msg
  const errfield = document.getElementById("err-field-5");
  if (
    isNaN(pentagonPerimeter) ||
    isNaN(pentagonApothem) ||
    pentagonPerimeter <= 0 ||
    pentagonApothem <= 0
  ) {
    errfield.innerText = "Please provide valid input.";

    document.getElementById("pentagon-p").value = "";
    document.getElementById("pentagon-a").value = "";
    return;
  }

  errfield.innerText = "";

  const pentagonArea = 0.5 * pentagonPerimeter * pentagonApothem;
  const resultField = document.getElementById("result-field");
  const listItem = document.createElement("li");
  listItem.innerHTML = `Pentagon area = ${pentagonArea} cm<sup>2</sup>`;
  resultField.appendChild(listItem);

  document.getElementById("pentagon-p").value = "";
  document.getElementById("pentagon-a").value = "";
};

// Area calculation Ellipse
const ellipseAreaIs = () => {
  const ellipseA = getInputValue("ellipse-a");
  const ellipseB = getInputValue("ellipse-b");

  // validation and display error msg
  const errfield = document.getElementById("err-field-6");
  if (isNaN(ellipseA) || isNaN(ellipseB) || ellipseA <= 0 || ellipseB <= 0) {
    errfield.innerText = "Please provide valid input.";

    document.getElementById("ellipse-a").value = "";
    document.getElementById("ellipse-b").value = "";
    return;
  }

  errfield.innerText = "";

  const ellipseArea = 3.1416 * ellipseA * ellipseB;
  const resultField = document.getElementById("result-field");
  const listItem = document.createElement("li");
  listItem.innerHTML = `Ellipse area = ${ellipseArea} cm<sup>2</sup>`;
  resultField.appendChild(listItem);

  document.getElementById("ellipse-a").value = "";
  document.getElementById("ellipse-b").value = "";
};
// adding random color
const colors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-tomato-500",
];

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseover", function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.classList.remove(...colors); // Remove previous color classes
    card.classList.add(randomColor); // Add new random color class
  });
});
