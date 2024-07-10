
let currentStartIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const imagesPerView = 3;

function showImages(startIndex) {
    images.forEach((img, index) => {
        if (index >= startIndex && index < startIndex + imagesPerView) {
            img.style.display = 'inline';
        } else {
            img.style.display = 'none';
        }
    });
}

function nextImage() {
    if (currentStartIndex + imagesPerView < images.length) {
        currentStartIndex += imagesPerView;
    } else {
        currentStartIndex = 0; 
    }
    showImages(currentStartIndex);
}

function prevImage() {
    if (currentStartIndex - imagesPerView >= 0) {
        currentStartIndex -= imagesPerView;
    } else {
        currentStartIndex = images.length - imagesPerView; 
    }
    showImages(currentStartIndex);
}


showImages(currentStartIndex);
