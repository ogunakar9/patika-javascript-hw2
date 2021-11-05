const myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

const closeBtns = document.getElementsByClassName("close");

for (let i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener("click", function() {
    this.parentElement.style.display = "none";
  });
}


