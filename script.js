var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

// new list items
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));

// create buttons
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");
  btn1.innerHTML = "√";
  btn2.innerHTML = "x";
  li.appendChild(btn1);
  li.appendChild(btn2);

// remove element
btn2.addEventListener("click", function () {
  li.parentNode.removeChild(li);
});

// the done element
btn1.addEventListener("click", function () {
  li.classList.toggle("done");
  });

 // .......
ul.appendChild(li);
  input.value = "";
}

// existing list items
Array.from(items).forEach(function (item) {
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");

// create buttons
  btn1.innerHTML = "√";
  btn2.innerHTML = "x";
  item.appendChild(btn1);
  item.appendChild(btn2);

// remove element
  btn2.addEventListener("click", function () {
    item.parentNode.removeChild(item);
  });

// the done element
  btn1.addEventListener("click", function () {
    item.classList.toggle("done");
  });
});


function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
