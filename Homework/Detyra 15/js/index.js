var modal = document.getElementById("modal");
var modalOpener = document.getElementById("modal-opener");
var modalCloser = document.getElementById("modal-closer");

modalOpener.addEventListener("click", function () {
  modal.style.left = "0%";
});

document.addEventListener("keyup", function (event) {
  if ((modal.style.left = "0" && event.keyCode === 27)) {
    modal.style.left = "100%";
  }
});

modalCloser.addEventListener("click", function () {
  modal.style.left = "100%";
});
