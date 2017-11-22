/*Steve DeNault

Write some code that adds the following numbers using a forEach loop.
Then output the answer inside the span element with the id="answer"

Array of numbers.  These are looped through and added to the totalNumbers
variable.  If the length of the array is reached the loop ends and the
final value of totalNumbers is output in the innerHTML.

A calulator would be able to accept an input of numbers, add them to the array
then add them with the same process. Included is simple adding machine.
*/

const numbers = [45, 76, 23, 89, 12, 5, 9, 100, 34]
let sum = 0

for (i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}

document.getElementById("answer").innerHTML = sum;
console.log(numbers.length);


//Simple add machine
var number1, number2, number3
const calc = (num1, num2, num3) =>{
    var total = num1 + num2 + num3
    alert(total + ' is total')
}

number1 = prompt('Add first positive integer ')
number2 = prompt('Add second positive integer ')
number3 = prompt('Add third positive integer ')
number1 = parseInt(number1,10); number2 = parseInt(number1,10);
          number3 = parseInt(number1,10)
calc(number1, number2, number3)

//
//var sum = 0;
//var nums = [65, 44, 12, 4];
function myFunction(item) {
    sum += item;
    demo.innerHTML = sum;
}

const tryIt = () => {
    sum = 0
    numbers.forEach(myFunction)
}
