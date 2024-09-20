import { adatlista } from "./adatok.js"
import { Kartya } from "./Kartya.js";
import { Kartyak } from "./Kartyak.js";

const kartyak = adatlista.map(adat => new Kartya(adat.id, adat.url, adat.name, adat.leiras));

// Kartyak osztály inicializálása
const kartyakObj = new Kartyak(kartyak);

// A HTML elemek lekérése
const pictureElem = document.querySelector('.picture');
const carouselElem = document.querySelector('.carousel');

// Kezdő kép és thumbnail-ek megjelenítése
kartyakObj.displayCurrentPicture(pictureElem);
kartyakObj.displayThumbnails(carouselElem);

// Következő és előző gombok eseménykezelése
document.querySelector('.next').addEventListener('click', () => {
    kartyakObj.nextPicture();
    kartyakObj.displayCurrentPicture(pictureElem);
});

document.querySelector('.previous').addEventListener('click', () => {
    kartyakObj.prevPicture();
    kartyakObj.displayCurrentPicture(pictureElem);
});

