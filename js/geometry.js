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
  listItem.innerHTML = `Triangle area = ${triangleArea}`;

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
  listItem.innerHTML = `Rectangle area = ${rectangleArea}`;
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
  listItem.innerHTML = `Parallelogram area = ${parallelogramArea}`;
  resultField.appendChild(listItem);

  document.getElementById("parallelogram-base").value = "";
  document.getElementById("parallelogram-height").value = "";
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
