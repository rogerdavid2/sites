
/* Next to the word cap: change the contect for different image titles **/
const captions = [
    {
        cap: "Seattle Great Wheel"
    },

    {
        cap: "Mount Rainer"
    },

    {
        cap: "Public Market",
    },

    {
        cap: "The Spheres"
    }
]


const imageTag = document.querySelectorAll("div.img-container img");
const sliderImages = document.querySelectorAll("section.slider img");

const captionTag = document.querySelector("figcaption.caption-output");

const sectionTag = document.querySelector("section.info");

const nextButton = document.querySelector("button.next");
const prevButton = document.querySelector("button.prev");

let currentImage = 0;

const next = function () {
    currentImage += 1;
    if (currentImage > sliderImages.length - 1) {
        currentImage = 0;
    }
    updateImage();
    updateCaption();
}

const prev = function () {
    currentImage -= 1;
    if (currentImage < 0) {
        currentImage = sliderImages.length - 1;
    }
    updateImage();
    updateCaption();
}

const updateImage = function () {
    sliderImages.forEach(img => {
        img.style.opacity = 0;
        img.style.animation = "fadeout 0.7s";
    })

    sliderImages[currentImage].style.opacity = 1;
    sliderImages[currentImage].style.animation = "fadein 0.7s";
}


const fadeIn = function () {
    const yScroll = window.pageYOffset;
    const pixels = Math.max(0, yScroll - sectionTag.offsetTop);
    let imageIndex = Math.floor(pixels / 800);

    if (imageIndex >= imageTag.length) {
        imageIndex = 0;
    } else if (imageIndex < 0) {
        imageIndex = imageTag.length - 1;
    }

    imageTag.forEach((img) => {
        img.style.zIndex = 0;
        img.style.opacity = 0;
    });

    imageTag[imageIndex].style.zIndex = 1;
    imageTag[imageIndex].style.opacity = 1;
};


const updateCaption = function () {
    captionTag.innerHTML = captions[currentImage].cap;
}

nextButton.addEventListener("click", () => {
    next();
})

prevButton.addEventListener("click", () => {
    prev();
})

document.addEventListener("scroll", function () {
    fadeIn();
});

document.addEventListener("resize", function () {
    fadeIn();
});

document.addEventListener("keyup", (event) => {
    if (event.key === 'ArrowLeft') {
        prev();
    } else if (event.key === 'ArrowRight') {
        next();
    }
})


let api = "https://template3.prismic.io/api/v2/documents/search?ref=YxI7jBYAACkAc9Hp";

const fetchContent = async function () {
    const response = await fetch(api)
    if (response.ok) {
        const data = await response.json();
        console.log(data.results)
    } else {
        throw Error(`${response.status}: Request failed`);
    }
}

fetchContent();