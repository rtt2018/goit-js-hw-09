import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/1-gallery.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryList = document.querySelector('.gallery');

// Тут нижче не розберешся :))))))
const elementsArray = images.map(element => {
  const addListItem = document.createElement('li');
  addListItem.classList.add('gallery-item');
  const imgLink = document.createElement('a');
  imgLink.classList.add('gallery-link');
  imgLink.href = element.original;
  const addImage = document.createElement('img');
  addImage.alt = element.description;
  addImage.src = element.preview;
  addImage.width = '360';
  addImage.height = '200';
  addImage.classList.add('gallery-image');
  imgLink.appendChild(addImage);
  addListItem.appendChild(imgLink);
  return addListItem;
});

galleryList.append(...elementsArray);

// А тут взагалі морок :-))
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
  let attempts = 0;
  const maxAttempts = 20;
  const interval = 10;

  const checkOverlay = setInterval(() => {
    let overlay = document.querySelector('.sl-overlay');
    attempts++;

    if (overlay) {
      overlay.classList.add('modal-overlay');
      clearInterval(checkOverlay);
    } else if (attempts >= maxAttempts) {
      console.log('Оверлей не знайдено!');
      clearInterval(checkOverlay);
    }

    const currentImg = gallery.currentImage;

    if (currentImg) {
      setTimeout(() => {
        let modalContent = document.querySelector('.sl-image');
        if (modalContent) {
          let paragraph = document.querySelector('.modal-header');
          if (!paragraph) {
            paragraph = document.createElement('p');
            paragraph.classList.add('modal-header');
            paragraph.textContent =
              gallery.elements[gallery.currentImageIndex].childNodes[0].alt; // Спробуй, вгадай, що це :))))
            modalContent.appendChild(paragraph);
          } else {
            paragraph.textContent =
              gallery.elements[gallery.currentImageIndex].childNodes[0].alt;
          }
        }
      }, 250);
    }
  }, interval);
});

// gallery.on('changed.simplelightbox', function () {
//   const currentImg = gallery.currentImage;

//   if (currentImg) {
//     currentImg.addEventListener('load', function () {
//       const paragraph = document.querySelector('.modal-header');

//       paragraph.textContent =
//         gallery.elements[gallery.currentImageIndex].childNodes[0].alt;
//     });

//     currentImg.addEventListener('error', function () {
//       console.error('Помилка завантаження зображенняБ оновіть сторінку!');
//     });
//   }
// });

gallery.on('error.simplelightbox', function (e) {
  console.log(e);
});
