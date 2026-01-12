let allElems = document.querySelectorAll(".elem");
let fullElemPage = document.querySelectorAll(".fullElem");
let fullElemPagebackBtn = document.querySelectorAll(".fullElem .back");

allElems.forEach(function (elem) {
  elem.addEventListener("click", function () {
    console.log(fullElemPage[elem.id]);
    fullElemPage[elem.id].style.display = "block";
  });
});

fullElemPagebackBtn.forEach(function (back) {
  back.addEventListener("click", function () {
    fullElemPage[back.id].style.display = "none";
  });
});
