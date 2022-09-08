const headerTag = document.querySelector("header");

const main = document.querySelector("main");
const section = document.querySelector("section");
const article = section.querySelectorAll("article");
const h1 = document.querySelectorAll("article h1");

const imgContainer = document.querySelector("section.img-container");
const pictureTag = imgContainer.querySelectorAll("img");

window.addEventListener("scroll", function () {
    const position = Math.max(0, window.pageYOffset - main.offsetTop);
    article.forEach((a, index) => {
        const p = Math.max(0, 2400 - position - index * 400);
        a.style.transform = `translate(${p}px, 0)`;
    });

    h1.forEach((h, index) => {
        const p = Math.max(0, 2400 - position - index * 400);
        if (p === 0) {
            h.classList.add("active");
        } else {
            h.classList.remove("active")
        }
    });
});

const loopAround = function () {
    const pixelsScrolled = window.pageYOffset;
    const contDistanceFromTop = imgContainer.offsetTop;

    const position = Math.max(0, pixelsScrolled - contDistanceFromTop);

    let imageIndex = Math.floor(position / 100);

    console.log("position ", position);
    console.log("Image Index: ", imageIndex);

    if (imageIndex >= pictureTag.length || imageIndex < 0) {
        imageIndex = 0;
    }

    pictureTag.forEach((img) => {
        img.style.zIndex = 0;
    });

    pictureTag[imageIndex].style.zIndex = 1;
}

document.addEventListener("scroll", function () {
    const mq = window.matchMedia("(prefers-reduced-motion: no-preference)")
    if (mq.matches) {
        loopAround();
    } else {
        console.log("dont animate")
    }
})
