const divTagImage = document.querySelectorAll("section.main-grid div img");
const divTag = document.querySelectorAll("section.main-grid div");

const easeInCubic = function (x) {
    return x * x * x;
}

const verticalTransform = function () {
    const topViewPort = window.pageYOffset;
    const midViewPort = (topViewPort + (window.innerHeight / 2)) / 600;

    divTagImage.forEach((image, index) => {
        if (index % 2 === 0) {
            image.style.transform = `translate3D(0, ${easeInCubic(-midViewPort * 2)}px, 0)`;
        } else {
            image.style.transform = `translate3D(0, ${easeInCubic(midViewPort * 2)}px, 0)`;
        }
    })
}

document.addEventListener("scroll", function () {
    verticalTransform();
})

document.addEventListener("resize", function () {
    verticalTransform();
}) 