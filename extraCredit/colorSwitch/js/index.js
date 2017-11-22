/*
INSTRUCTIONS: Modify the changeColor code so that the background color of the page corresponds to the color selected in the dropdown menu. Note: "Red" is already done for you.

-----------------------------------------------------------------
RESOURCES / HINTS:
* Conditional logic
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
* Comparison operators
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
* Getting values from the DOM
  https://www.lynda.com/JavaScript-tutorials/Access-change-elements/574716/612054-4.html?autoplay=true
* Modifying styles dynamically using the DOM + JavaScript
  https://www.lynda.com/JavaScript-tutorials/Access-change-classes/574716/612055-4.html?autoplay=true
-----------------------------------------------------------------
*/




const changeColor = () => {
     const color = document.getElementById("color").value
     if (color === 'r') {
          document.body.style.background = 'red'
     } else if (color === 'o') {
          document.body.style.background = 'orange'
     } else if (color === 'y') {
          document.body.style.background = 'yellow'
     } else if (color === 'g') {
          document.body.style.background = 'green'
     } else if (color === 'b') {
          document.body.style.background = 'blue'
     } else if (color === 'p') {
          document.body.style.background = 'purple'
     }
}
