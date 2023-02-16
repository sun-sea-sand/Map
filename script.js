function calculate() {
  // Get input values
  let width = document.getElementById("width").value;
  let depth = document.getElementById("depth").value;
  let cohesion = document.getElementById("cohesion").value;
  let friction = document.getElementById("friction").value;
  let unitWeight = document.getElementById("unit-weight").value;

  // Calculate bearing capacity
  let phi = Math.PI / 180 * friction;
  let qult = (9 * cohesion + 0.5 * 16 * unitWeight * width * width) * depth + 0.5 * 16 * unitWeight * width * width * Math.tan(phi);

  // Display result
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "The ultimate bearing capacity of the shallow foundation is " + qult + " kN/m².";
}
