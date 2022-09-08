const carouselImg = [...document.querySelectorAll(".carousel-inner img")];
const lightboxImg = document.querySelector("img.lightbox-img");
const nextButton = document.querySelector("button.next");
const frameTag = document.querySelector("section.image-frame");


let imageIndex = 0;
let clickedImageIndex;

const displayImage = function (image) {
    lightboxImg.src = image.dataset.picsrc;
    clickedImageIndex = carouselImg.indexOf(image);
    displayFrame();
}

const displayFrame = function () {
    frameTag.classList.add("active");
    lightboxImg.classList.add("active");
}

carouselImg.forEach((img, index) => {
    img.addEventListener("click", () => {
        displayImage(img);
        console.log(img, index);
    })
})