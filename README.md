#Grid for Pictionnary

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Why/What is (developed) ?

### Why ?

I try to create a table that, once clicked on and maintened clicked, will color in black the background of its cells (called "Pixel"). In the end, it represent a pencil coloring the cells while hovered.

### What ?

- App.js

Contain the grid.

- Grid.js

Creates the Grid and set a status "Grid", representing the created array of array ('table').
While rendering table, ti has two functions modifing its state by either onMouseUp or onMouseDown.
When I check my representation, I see that I need to render first the ROW of my table and then in each row its corresponding ELEMENT in that ROW. That's why I choose to use a double map. 
Still need to check / test if a Component "GridRow" isn't a better option.

- GridRow.js

I let it in the project now as-is because I'm still trying to figure out if it's necessary to create a "intermediate" component between my Grid and its Pixels.

- Pixel.js

Has its own state, "painted" either true or false. It has a function when the mouse enter that particular pixel, it changes state to true and with a ternary operator, if the hovered state of it's parent component - Grid - is "hovered" with "MouseDown" (meaning the user actually click inside the Grid) then if change the "painted" state to "true" leading to a change of background color.


	- 
