const panTag = document.querySelector("section.panner div.world");
const articleTag = document.querySelector("article");
const imageTag = document.querySelectorAll("img[data-caption]");
const captionTag = document.querySelector("article.title-container h1");
const mainTag = document.querySelector('main');

const smallDivTag = document.querySelector("div.header-small-div");
const toggleTag = document.querySelector("main a.toggle");
const headerTag = document.querySelector("main header");

let currentX = 0;
let currentY = 0;

let aimX = 0;
let aimY = 0;

document.addEventListener("mousemove", function (event) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const worldWidth = panTag.clientWidth;
    const worldHeight = panTag.clientHeight;

    const mouseX = event.pageX;
    const mouseY = event.pageY;

    const panWidth = worldWidth - windowWidth;
    const panHeight = worldHeight - windowHeight;

    const percentageX = mouseX / windowWidth;
    const percentageY = mouseY / windowHeight;

    aimX = -1 * panWidth * percentageX;
    aimY = -1 * panHeight * percentageY;

})

/* allow animation to continue when mouse stops */
const animate = function () {
    currentX += (aimX - currentX) * 0.02;
    currentY += (aimY - currentY) * 0.02;
    panTag.style.transform = `translate3D(${currentX}px, ${currentY}px, ${0})`
    reduceMotion();
    requestAnimationFrame(animate);
}

const updateSection = function () {
    imageTag.forEach((img, index) => {
        img.addEventListener("mousemove", () => {
            articleTag.classList.add('active');
            captionTag.textContent = img.getAttribute('data-caption');
        })

        img.addEventListener("mouseleave", () => {
            articleTag.classList.remove('active');
            articleTag.style.transition = 'opacity 300ms ease-out'
        })
    })

}

const displayMenu = function () {
    toggleTag.addEventListener('click', () => {
        headerTag.classList.toggle('active');
        smallDivTag.classList.toggle('active');
        if (headerTag.classList.contains('active')) {
            toggleTag.textContent = 'Close';
        } else {
            toggleTag.textContent = 'Open';
        }
    })
}

/* 
 Accesiblity Settings
*/
const reduceMotion = function () {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) {
        panTag.style.transform = `translate3D(${0}px, ${0}px, ${0}px)`;
    }

}


animate();
displayMenu();
updateSection();
reduceMotion();