const images = document.querySelectorAll("div.img-container img");

const fadeIn = function () {
    images.forEach((image) => {
        const imageTop = image.getBoundingClientRect().top;
        const imageBottom = image.getBoundingClientRect().bottom;

        if (imageTop === 0 && imageBottom > 0) {
            image.classList.add("active");
        } else {
            image.classList.remove("active");
        }
    });
};

document.addEventListener("scroll", function () {
    fadeIn();
});

document.addEventListener("resize", function () {
    fadeIn();
});

