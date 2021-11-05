const myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

const closeBtns = document.getElementsByClassName("close");
for (let i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener("click", function () {
    this.parentElement.style.display = "none";
  });
}

const listItemContainer = document.getElementById("list");
listItemContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("task").value;
  const textToAdd = document.createTextNode(inputValue);
  li.appendChild(textToAdd);

  //if input is empty or just whitespace
  if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("task").value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}
