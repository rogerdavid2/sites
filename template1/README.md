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
