import { adatlista } from "./adatok.js"
import { Kartya } from "./Kartya.js";
import { Kartyak } from "./Kartyak.js";

const kartyak = adatlista.map(adat => new Kartya(adat.id, adat.url, adat.name, adat.leiras));


const kartyakObj = new Kartyak(kartyak);


const pictureElem = document.querySelector('.picture');
const carouselElem = document.querySelector('.carousel');


kartyakObj.displayPicture(pictureElem);
kartyakObj.displayThumbnails(carouselElem);


document.querySelector('.next').addEventListener('click', () => {
    kartyakObj.nextPicture();
    kartyakObj.displayPicture(pictureElem);
});

document.querySelector('.previous').addEventListener('click', () => {
    kartyakObj.prevPicture();
    kartyakObj.displayPicture(pictureElem);
});

