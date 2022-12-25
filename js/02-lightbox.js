import { galleryItems } from "./gallery-items.js";

// console.log(SimpleLightbox);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const markup = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li><a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a></li>`
  )
  .join("");
galleryEl.innerHTML = markup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
}); 
