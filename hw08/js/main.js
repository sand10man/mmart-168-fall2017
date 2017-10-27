//Steve DeNault
// PART I: Using a while loop, print the message provided 100 times
//------------------------------------------------------------------

const name = 'John'

// Creates a list element and appends it to the unordered list in part1
//Add items to D. parameter is passed in
const appendListElement = (text) => {
  //creates an empty list containewr
  const li = document.createElement('li')

  const textNode = document.createTextNode(text)
  //creates text node in document
  li.appendChild(textNode)
  //attaches textNode to list item
  document.querySelector('#part1').appendChild(li)
    //document.getElementById('part1').innerHTML=text
  }


//begining while loop
let counter = 0
while (counter <6) {
  appendListElement(counter +" " + name)
  ++counter
}

/*
for (i = 0; i < 5; i++) {
  function myFunction() {
    var para = document.createElement("P");
    var t = document.createTextNode["This is a paragraph."];
    for (i = 0; i < 5; i++) {
    para.appendChild(t);
    document.getElementById("myDIV").appendChild(para);
  appC[i] = document.querySelector('#part1').appendChild(li)
  console.log (appC[i])
}
}
//
const addListItemToUnorderedHTMLList = (message) => {
  // add "li" tag to "ul" tag
  // step 1: get element in HTML fifle
  const ul = document.getElementById('output')
  // step 2: create a new li elemsnt
  const li = document.createElement("li")
  //step 3: create a textNode with the message inside
  const textNode = document.createTextNode(message)
  //step 4: append the textNode to the li element
  li.appendChild(textNode)//do this 100 times
  // step 5: append the li element to the ul element
  ul.appendChild(li)
}
*/


//------------------------------------------------------------------
// PART II: Using a for loop, write out each person’s avatar, name, and score, based on the people array
//------------------------------------------------------------------
//The data:
var people = [
    { name: 'Jane', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 300 },
    { name: 'Brenda', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 10} ,
     { name: 'Wanda', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 60 },
     { name: 'Maria', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 80 },
     { name: 'Jasper', pic: 'https://3.bp.blogspot.com/-_3f5QzVwocE/U3G4_PeOoTI/AAAAAAAAeC0/uanC3ua1cu4/s1600/OldSpongeBobStock5-25-13.png', score: 600 },
     { name: 'Malik', pic: 'http://knight.gamebanana.com/img/ico/sprays/patrick_star_preview_2.png', score: 40 }
]


// use a for loop to loop through each element
// of the people array and output this message
// to the screen (except show each person's info):
const printNames = (counter) => {
  // Message 1
  const img1 = document.createElement('img')
  img1.src = people[counter].pic
  img1.classList.add('avatar')

  const paragraph1 = document.createElement('p')
  const text1 = document.createTextNode('Welcome, ' + people[counter].name + '! Your score is: ' + people[counter].score)
  paragraph1.appendChild(text1)

  document.querySelector('#part2').appendChild(img1)
  document.querySelector('#part2').appendChild(paragraph1)
}

for (let i = 0; i < people.length; i++) {
  printNames(i)
}



/*

  // Message 2
  const img2 = document.createElement('img')
  img2.src = people[1].pic
  img2.classList.add('avatar')

  const paragraph2 = document.createElement('p')
  const text2 = document.createTextNode('Welcome, ' + people[1].name + '! Your score is: ' + people[1].score)
  paragraph2.appendChild(text2)

  document.querySelector('#part2').appendChild(img2)
  document.querySelector('#part2').appendChild(paragraph2)
}

printNames()
*/
