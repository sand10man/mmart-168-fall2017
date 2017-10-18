//Steve DeNault

// Adding element to array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

const myFunction = () => {
  var fruit = prompt("Please enter your fruit", "Pear");
    if (fruit != null)
    fruits.push(fruit);
    document.getElementById("demo").innerHTML = fruits;
}

// PART III: section A
//------------------------------------------------------------------
//Create a function that appends an "li" element to an unordered list
// ("ul" element) in the DOM. This function should take a string as a
// parameter. In the body of the function, there should be code that
// appends an "li" element, with the string inside, to the un-ordered
// list ("ul" tag):

const addListItemToUnorderedHTMLList = (message) => {
  // add "li" tag to "ul" tag
  // step 1: get element in HTML fifle
  const ul = document.getElementById('output')
  // step 2: create a new li elemsnt
  const li = document.createElement("li")
  //step 3: create a textNode with the message inside
  const textNode = document.createTextNode(message)
  //step 4: append the textNode to the li element
  li.appendChild(textNode)
  // step 5: append the li element to the ul element
  ul.appendChild(li)
}

//addListItemToUnorderedHTMLList("Joe")

//addListItemToUnorderedHTMLList("Mary")
//addListItemToUnorderedHTMLList("George")

//const appendLi = ('string') => {}
//------------------------------------------------------------------
// PART III, Section B
//------------------------------------------------------------------
// Using the strategy of your choice, write a loop over the numbers
// 1 - 100 that satisfies the following conditions:
//
// 1. If the number is divisible by 3, append "Fizz" to the unordered list
// 2. If the number is divisible by 5, append "Buzz" to the unordered list
// 3. If the number is divisible by 3 AND 5, append "FizzBuzz" to the unordered list.
// 4. Bonus points: Include both the number *and* the word you've appended to the list

//const fizzBuzz = () => {
  //let start = 0;
  //let stop = 100;
  //var str = 'output = ';
    for (let i = 1; i < 100; i++) {
      //console.log(i)
      if (i % 3 === 0 && i % 5 === 0) {
        addListItemToUnorderedHTMLList("FizzBuzz")
      } else if (i % 3 === 0) {
        addListItemToUnorderedHTMLList("Fizz")
      } else if (i % 5 === 0) {
        addListItemToUnorderedHTMLList("Buzz")
      } else {
      addListItemToUnorderedHTMLList(i)
    }
  }
  //}
  //    addListItemToUnorderedHTMLList(i);
  //  }

      /*  if (i % 3 == 0 && i % 5 == 0) {
            str += "Fizz Buzz";
        }else if(i % 3 == 0) {
            str += "Fizz";
        }else if(i % 5 == 0) {
            str += "Buzz";
        }else {
            str += i;
        }
        if (i<stop)
            str += ", ";
    }
    document.getElementById('writeto').innerHTML += str;
    console.log(str);
} */
