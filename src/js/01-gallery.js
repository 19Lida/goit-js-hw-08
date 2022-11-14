// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

// 1.Створення і рендер розмітки.
const galleryContainer = document.querySelector('.gallery');
const cardsMarkUp = createImgCard(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkUp);
function createImgCard(images) {
    return images.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>`;
    })
    .join('');
}
galleryContainer.addEventListener('click', onGalleryContainerClick)

function onGalleryContainerClick(event){
    const imageItem = document.querySelector(".gallery__image");
    event.preventDefault();
    console.log(imageItem.dataset.source);
console.log(event.target);

     var lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionDelay: 250,
        animationSpeed: 250,
    });

};


console.log(galleryItems);
