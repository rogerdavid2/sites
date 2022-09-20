# Template 1
![](mkdwn/cover.jpeg)

## Index.html
The cover page uses two SVG's one is the "colored-in" text, and the 
other is the fill. Together a see through effect occurs when an image overlays
above both SVGs.

About the image transformation:
The images y-axis is being transformed according to the y-distanced pixels scrolled
plus the window's inner height divided by two which results in the middle of the view port.
The middle of the view port is useful because with that value we can obtain the middle 
of each image and calculate the y-direction transformation.

To further smoothen the vertical transformation I created a cubic function
which is represented as `n^3` and takes the middle view port value as a parameter.

![](mkdwn/n3.jpeg)

**Figure 1: the rate of change of n^3 is a quadratic equation**

### Menu Behavior
![](mkdwn/menu.jpeg)

On hovering links:
The image container is positioned relative, and the children images
are positioned absolute. This allows for stacking to occur so when
each link is hovered the respective background image is revealed with JavaScript and ZIndex order.
In future projects, I achieve this same effect with CSS only. 

On opening the menu: 
a `setTimeOut` is launched. The reason I used a setTimeOut function is because I can access 
the optional parameter and create a top to bottom staggering opacity animation. When the menu is closed
each active class is removed with a timer as well to create a "stagger in" and "stagger out" effect for each link.

## Contact.html
This page has the on scroll image opacity effect. 
The main div has a minumum height of 4000px so there is a greater scrolling range, and 60% width for pleasant margin. 
Each image, and not the container itself have position `sticky` applied. That is because in the JavaScript, I use
`getBoundingClientRect()` to detect if the image is in view, and since there are multiple images each has to get revealed and stick.
and not just the container!

```
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
```
This is the calculation done to detect if each image is in view. By default
the images just layer and stick ontop of eachother if no fade-in effect is used! Which creates
another interesting effect without JavaScript.





