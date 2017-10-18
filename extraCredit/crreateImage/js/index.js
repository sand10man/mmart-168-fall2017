/*
Instructions: Modify the function below so that adds an image to the #gallery element each time the user clicks the "Add Image" Button
*/

const addImage = () => {
  for (var i = 1; i <= 20; i++) {
      var image = document.createElement("img");
      image.setAttribute("src", "images/" + i + ".jpg");
      document.querySelector(".gallery").appendChild(image);
}
}
