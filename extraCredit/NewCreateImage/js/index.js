/*
Instructions: Modify the function below so that adds an image to the
 #gallery element each time the user clicks the "Add Image" Button
 Seems we need imae folder.
 1. An array of web image of geckos was constructed
 2. let variable 'numberOfGeckos established to track elements of array
 3. function incrementGeckos established to a) create "image" element
    b) attach the gecko image to this element and c) attach the
    populated image element to the existing gallery element.  Then
    numberOfGeckos was incremented to point to the next image in the
    array.    Same logic as recommended process but new terminology
    made this more clear to me.
*/
const geckos = ['https://4.bp.blogspot.com/-_4YSL3AIp0o/Ue5zT_jUweI/AAAAAAAAoms/NQTKfJHMbSg/s640/tokay+gecko+2.jpg',
'http://www.animalspot.net/wp-content/uploads/2016/01/Gargoyle-Gecko-Morphs.jpg',
'https://i.pinimg.com/564x/ed/21/fc/ed21fcb0817e1a262a40688e253322ce--baby-flower-tame-animals.jpg',
'https://media.mnn.com/assets/images/2016/09/gecko-toe-pads.jpg.838x0_q80.jpg',
'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/E236/production/_86401975_86401974.jpg']

let numberOfGeckos = 0
const incrementGeckos = () => {

  let image = document.createElement("img");
  image.setAttribute('src', geckos[numberOfGeckos]);
  document.getElementById("gallery").appendChild(image);
  ++numberOfGeckos
}
  /* if addimage() = true then i++ image gallery
const addImage =() => {
    image.setAttribute("src", geckos[i]);
    document.querySelector("#gallery").appendChild(image);
  }
}
*/
