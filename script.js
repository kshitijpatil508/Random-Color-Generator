let checkbox = document.getElementById("alpha");
console.log("checkbox: ", checkbox.checked);

function generateColor() {
  let bodyBg = document.getElementById("body");
  let colorCode = document.getElementById("color_code");
  let box = document.getElementById("box1");
  let checkboxChecked = checkbox.checked;
  let alphaValue = Math.random().toFixed(3);
  let red = Math.floor(Math.random() * 255),
    green = Math.floor(Math.random() * 255),
    blue = Math.floor(Math.random() * 255);
  if (checkboxChecked == true) {
    colorCode.innerText = `rgba(${red},${green},${blue},${alphaValue})`;
    box.style.background = `rgba(${red},${green},${blue},${alphaValue})`;
    // bodyBg.style.background = `rgb(${green},${blue},${red})`;
  } else {
    colorCode.innerText = `rgb(${red},${green},${blue})`;
    box.style.background = `rgb(${red},${green},${blue})`;
    // bodyBg.style.background = `rgb(${green},${blue},${red})`;
  }
}
