/* Steve DeNault
Instructions: When the user clicks the button, do the following:

   1) update the #emoji div with the appropriate emoji face....
   This is done with the switchEmoji function which is called with
   the onclick feature of the three buttons.  The HappyButton has a
   toggle feature to swithc the backgroundColor from red to orange.

   I've changed a number of the features of the emojis including the
   color, size and rotation. This was done both in the .js and .css
   files. Pressing the SadButton opens an alert window.
        :-)
        :-|
        :-(
   2) Make the selected button turquoise (assign the btn-info class to it and remove the
    btn-info class from the previously selected button). This Instruction
    was exceeded.
*/

const switchEmoji = (mood) => {
     // Modify the code below to make it happen:
     if (mood === 'happy') {
          document.getElementById('emoji').innerHTML = ':-)'
          //document.getElementById('HappyButton').style.backgroundColor = 'Red';
          var background = document.getElementById('HappyButton').style.backgroundColor;
            if (background == "orange") {
                document.getElementById('HappyButton').style.backgroundColor = "red";
              } else {
                document.getElementById('HappyButton').style.backgroundColor = "orange";
              }
                document.getElementById('emoji').style.color = 'Red';
                console.log("show the :-) face and make the emoji read!")
     }
     else if (mood === 'neutral') {
           document.getElementById('emoji').innerHTML = ':-|'
           document.getElementById('emoji').style.color = 'Gray';
           document.getElementById('NeutralButton').style.backgroundColor = "green";

           console.log("show the :-! face and make the emoji aqua!")
     }
     else if (mood === 'sad') {
          alert("Go away! Leave me alone!");

          document.getElementById('emoji').innerHTML = ':-('
          document.getElementById('emoji').style.color = 'purple';
          console.log("show the :-( face and make the emoji purple!")
     }
}
