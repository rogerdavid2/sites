const companyImages = document.querySelectorAll("header.h-contact img");
const mainTag = document.querySelector("main");

const sectionTag = document.querySelector("section.timeline-container");
const articleTag = document.querySelectorAll("article.timeline");

const toggleTag = document.querySelector("a.toggle");
const closeTag = document.querySelector("a.close")

const mobileMenu = document.querySelector("section.mobile-nav");


const updateOpacity = function () {
    const midBrowser = window.innerHeight / 2;

    companyImages.forEach(img => {
        const { top, height } = img.getBoundingClientRect();

        const midImg = top + height / 2;
        const diff = midImg - midBrowser;

        const scale = Math.min(1, 1 - diff / 1000);
        img.style.opacity = `${scale}`;
        img.style.transform = `scale(${scale})`
    })
}


const updateTimeline = function () {
    const pos = Math.max(0, window.pageYOffset - mainTag.offsetTop);
    if (pos === 0) {
        mainTag.style.backgroundColor = '#2748ac';
        articleTag.forEach(a => {
            a.style.backgroundColor = '#2748ac';
        })
    } else {
        mainTag.style.backgroundColor = 'black';
        articleTag.forEach(a => {
            a.style.backgroundColor = 'black';
        })
    }

    articleTag.forEach((a, index) => {
        const p = Math.min(0, 2400 - pos - index * 1000);
        console.log('non cubic', p);
        a.style.transform = `translate3D(${p}px, 0, 0)`
    })
}

window.addEventListener("scroll", () => {
    updateOpacity();
    updateTimeline();
})


window.addEventListener("resize", () => {
    updateOpacity();
})