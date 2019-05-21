var link = document.querySelector(".modal__listener");
var popup = document.querySelector(".modal");
var wrapper = document.querySelector(".wrapper");
var close = document.querySelector(".wrapper__close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");
  wrapper.classList.add("wrapper__close");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal__show");
  close.classList.remove("wrapper__close")
});
