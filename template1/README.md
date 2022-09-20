# Template 1
![](mkdwn/cover.jpeg)

## Index.html
The cover page uses two SVG's one is the "colored-in" text, and the 
other is the fill. Together we can achieve a see through effect when an image overlays
above both SVGs.

### About the image transformation.
The images y-axis is being transformed according to the y-distanced pixels scrolled
plus the window's inner height divided by two which results in the middle of the view port.
The middle of the view port is useful because with that value we can obtain the middle 
of each image and calculate their y-direction transformation.

To further smoothen the vertical transformation I created a cubic function
which is represented as `n^3` and takes the middle view port value as a parameter. 
![](mkdwn/n3.jpeg)
**Figure 1: n^3 function which has a rate of change of 3n^2 which is a n^2 quadratic equation**

## Menu Behavior
![](mkdwn/menu.jpeg)
