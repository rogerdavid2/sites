const smallDivTag = document.querySelector("div.header-small-div");
const toggleTag = document.querySelector("main a.toggle");
const headerTag = document.querySelector("main header");

const imageListTag = document.querySelector("section.image-list-container")
const underUl = document.querySelector("section.under-ul-container");
const gridviewTag = document.querySelectorAll("h3.grid-view-h3");
const imagesTag = document.querySelectorAll("img.pic");


const displayMenu = function () {
    toggleTag.addEventListener('click', () => {
        headerTag.classList.toggle('active');
        smallDivTag.classList.toggle('active');
        if (headerTag.classList.contains('active')) {
            toggleTag.textContent = 'Close';
            toggleTag.style.color = 'whitesmoke';
        } else {
            toggleTag.textContent = 'Open';
            toggleTag.style.color = '#333';
        }
    })
}

const slideMenu = function () {
    imageListTag.classList.toggle('open');
    underUl.classList.toggle('open');
}

gridviewTag.forEach(btn => {
    btn.addEventListener('click', function () {
        slideMenu();
    })
})

displayMenu();