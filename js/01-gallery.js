import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
// Change code below this line
// 1. Рендер розмітки
const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");
galleryEl.innerHTML = markup;

galleryEl.addEventListener("click", galleryClickHandler);

function galleryClickHandler(event) {
  event.preventDefault();
  // 2. Делегування на gallery

  const imageEl = event.target;
  if (!imageEl.classList.contains("gallery__image")) {
    return;
  }
  // 3. Робимо фуллскірн фото
  const originalPhoto = imageEl.dataset.source;

  const fullSceenPhotoMarkup = basicLightbox.create(`
    <img src=${originalPhoto} width="800" height="600">
`);
  // 4. Закриття на esc
  fullSceenPhotoMarkup.show(() => {
    window.addEventListener("keydown", EscKeyPressHandler);
  });

  function EscKeyPressHandler(event) {
    if (event.code === "Escape") {
      fullSceenPhotoMarkup.close();
      window.removeEventListener("keydown", EscKeyPressHandler);
    }
  }
}
