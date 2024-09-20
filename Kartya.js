export class Kartya {
    constructor (id, url, name, leiras) {
        this.id = id;
        this.url = url;
        this.name = name;
        this.leiras = leiras;
    }
    
    createLargeImageElem() {
        const img = document.createElement('img');
        img.src = this.url;
        img.alt = this.leiras;
        img.classList.add('large-image');
        return img;
    }

    createThumbnailImagesElem() {
        const thumbNail = document.createElement('img');
        thumbNail.src = this.url;
        thumbNail.alt = this.leiras;
        thumbNail.classList.add('thumbnail');
        thumbNail.addEventListener('click');
        return thumbNail;
    }
}