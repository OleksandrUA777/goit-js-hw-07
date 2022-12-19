import { galleryItems } from "./gallery-items.js";

// console.log(SimpleLightbox);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const markup = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`
  )
  .join("");
galleryEl.innerHTML = markup;

galleryEl.addEventListener("click", galleryClickHandler);

function galleryClickHandler(event) {
  event.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
