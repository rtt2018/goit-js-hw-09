import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as l}from"./assets/vendor-D0gBiHs0.js";const d=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],m=document.querySelector(".gallery"),h=d.map(e=>{const i=document.createElement("li");i.classList.add("gallery-item");const o=document.createElement("a");o.classList.add("gallery-link"),o.href=e.original;const t=document.createElement("img");return t.alt=e.description,t.src=e.preview,t.width="360",t.height="200",t.classList.add("gallery-image"),o.appendChild(t),i.appendChild(o),i});m.append(...h);let a=new l(".gallery a");a.on("show.simplelightbox",function(){let e=0;const i=20,t=setInterval(()=>{let p=document.querySelector(".sl-overlay");e++,p?(p.classList.add("modal-overlay"),clearInterval(t)):e>=i&&(console.log("Оверлей не знайдено!"),clearInterval(t));const c=a.currentImage;if(c){let r=document.querySelector(".sl-image");if(r){const n=document.createElement("p");n.classList.add("modal-header"),n.textContent=a.elements[a.currentImageIndex].childNodes[0].alt,r.appendChild(n);const s=setInterval(()=>{c.style.opacity==="1"&&(clearInterval(s),setTimeout(()=>{n.style.opacity=1},250))},10)}}},10)});a.on("changed.simplelightbox",function(){const e=document.querySelector(".sl-image");if(a.currentImage){const o=document.querySelector(".modal-header");o.style.opacity=0,o.textContent=a.elements[a.currentImageIndex].childNodes[0].alt;const t=setInterval(()=>{e&&e.style.opacity==="1"&&(clearInterval(t),setTimeout(()=>{o.style.opacity=1},250))},10)}});a.on("error.simplelightbox",function(e){console.log(e)});
//# sourceMappingURL=1-gallery.js.map