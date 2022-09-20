# Template 1
![](mkdwn/cover.jpeg)

## Index.html
The cover page uses an two SVG's which are overlayed.
One SVG consists of the fill and the other colored in version.
Together when scroll creates a see-through effect!

The images y-axis is being transformed according to y-distanced pixels scrolled
plus the window's inner height divided by two which results in the middle of the view port.
The middle of the view port is useful because with that value we can obtain the middle 
of each section and calculate the y-direction transformation accordingly!

Also to create a smooth vertical transformation I created a cubic function
which is represented as `n^3` and takes the middle view port value as a parameter. 
