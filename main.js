const listLeft = document.querySelectorAll(".listLeft li");
const listLeftParent = document.querySelector(".listLeft");
const listRight = document.querySelectorAll(".listRight li");
const listRightParent = document.querySelector(".listRight");

const fromInput = document.querySelector(".fromVal");
const toInput = document.querySelector(".toVal");

const buttonLeft = document.querySelectorAll(".left");
const buttonRight = document.querySelectorAll(".right");
let pushArray = [];
let elementArray = [];

listLeft.forEach(event => event.addEventListener("click", addToLeftArray));
listRight.forEach(event => event.addEventListener("click", addToRightArray));

//adding to array

function addToLeftArray() {
  event.target.classList.add("selected");
  elementArray.push(event.target);
  //   setTimeout(function() {
  //     toAddClass.classList.remove("selected");
  //   }, 2000);
}
function addToRightArray() {
  event.target.classList.add("selected");
  elementArray.push(event.target);
}

//moving Right

function moveRight() {
  elementArray.forEach(event => {
    listRightParent.appendChild(event);
  });
  elementArray = [];
}

//moving Left

function moveLeft() {
  elementArray.forEach(event => {
    listLeftParent.appendChild(event);
  });
  elementArray = [];
}

// moving Right based on range

function moveRightIndex() {
  const fromVal = parseInt(fromInput.value);
  const toVal = parseInt(toInput.value);
  from = fromVal - 1;
  to = toVal;
  const listLeft = document.querySelectorAll(".listLeft li");
  elementArray = Array.from(listLeft);
  pushArray = elementArray.slice(from, to);
  //   debugger;
  pushArray.forEach(event => {
    listRightParent.appendChild(event);
  });
  pushArray = [];
}

// moving Left based on range

function moveLeftIndex() {
  const fromVal = parseInt(fromInput.value);
  const toVal = parseInt(toInput.value);
  from = fromVal - 1;
  to = toVal;
  const listRights = document.querySelectorAll(".listRight li");
  elementArray = Array.from(listRights);
  pushArray = elementArray.slice(from, to);
  //   debugger;
  pushArray.forEach(event => {
    listLeftParent.appendChild(event);
  });
  pushArray = [];
}

buttonRight[0].addEventListener("click", moveRight);
buttonLeft[0].addEventListener("click", moveLeft);
buttonRight[1].addEventListener("click", moveRightIndex);
buttonLeft[1].addEventListener("click", moveLeftIndex);
