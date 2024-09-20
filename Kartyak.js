export class Kartyak {
    constructor(kartyak) {
        this.kartyak = kartyak,
        this.currentIndex = 0;
    };

    displayPicture(pictureElem) {
        pictureElem.innerHtml = '';
        const kartya = this.kartyak[this.currentIndex];
        pictureElem.appendChild(kartya, createLargeImageElem())
    };

    displayThumbnails(carouselElem) {
        this.kartyak.forEach((kartya, index) => {
            const thumbnail = kartya.createThumbnailImagesElem(() => {
                this.currentIndex = index;
                this.displayPicture(document.querySelector('.picture'));
            });
            carouselElem.appendChild(thumbnail);
        });
    }

    nextPicture() {
        this.currentIndex = (this.currentIndex + 1) % this.kartyak.length;
    }

    previousPicture() {
        this.currentIndex = (this.currentIndex - 1 + this.kartyak.length) % this.kartyak.length;
    }
}