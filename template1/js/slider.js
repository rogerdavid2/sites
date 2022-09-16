const slideArea = document.querySelector("div.slider-container");
const imagesTag = document.querySelectorAll("img.slide-pic");
const outputP = document.querySelector("p.output");


let curImage = 0;
let z = 1;

slideArea.addEventListener("click", function () {
    imagesTag.forEach(img => {
        img.style.opacity = 0;
    })

    curImage += 1;
    if (curImage > imagesTag.length - 1) {
        curImage = 0;
    }
    z += 1;
    imagesTag[curImage].style.zIndex = z;
    imagesTag[curImage].style.opacity = 1;
    outputP.textContent = "Image: " + (curImage + 1) + " / " + imagesTag.length
})
