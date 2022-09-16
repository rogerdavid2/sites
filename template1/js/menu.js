document.addEventListener('DOMContentLoaded', () => {

    // open and close menu tags
    const menuTag = document.querySelector("header a");
    const closeTag = document.querySelector("nav div a");

    // navTag to translate, and body to prevent body overlow when menu is active
    const bodyTag = document.querySelector("body");
    const navTag = document.querySelector("nav");

    // nav links are looped over to display images defined in css
    const navLinks = document.querySelectorAll(".menu-link");
    const navImg = document.querySelector(".nav-div-img");



    const changeImage = function () {
        navLinks.forEach((link) => {
            link.addEventListener("mousemove", (ev) => {
                link.children[1].style.opacity = 1;
                link.children[0].style.zIndex = 1;
                navImg.style.opacity = 0;
            })

            link.addEventListener('mouseleave', (ev) => {
                link.children[1].style.opacity = 0;
                link.style.zIndex = 0;
                navImg.style.opacity = 1;
            })
        })
    }

    changeImage();

    const openMenu = function () {
        navTag.classList.add('active');
        bodyTag.classList.add('active');

        navLinks.forEach((link, index) => {
            setTimeout(() => {
                link.classList.add('active')
            }, index * 200)
        })
        setTimeout(() => {
            navImg.classList.add('active')
        }, 500)
    }

    const closeMenu = function () {
        navTag.classList.remove('active');
        bodyTag.classList.remove('active');

        navLinks.forEach((link, index) => {
            setTimeout(() => {
                link.classList.remove('active')
            }, index * 200)
        })

        setTimeout(() => {
            navImg.classList.remove('active')
        }, 500)
    }

    menuTag.addEventListener("click", function () {
        openMenu();
    })

    closeTag.addEventListener("click", function () {
        closeMenu();
    })
}) 