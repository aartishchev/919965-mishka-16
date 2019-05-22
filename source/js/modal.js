var link = document.querySelector(".week-product__button");
var popup = document.querySelector(".modal");
var wrapper = document.querySelector(".modal__wrapper");
var cart1 = document.querySelector(".product-card__cartlink--first");
var cart2 = document.querySelector(".product-card__cartlink--second");
var cart3 = document.querySelector(".product-card__cartlink--third");

function openModal (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--close");
  wrapper.classList.remove("modal__wrapper--close");
}

link && link.addEventListener("click", openModal);
cart1 && cart1.addEventListener("click", openModal);
cart2 && cart2.addEventListener("click", openModal);
cart3 && cart3.addEventListener("click", openModal);

wrapper.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal--close");
  wrapper.classList.add("modal__wrapper--close");
})
