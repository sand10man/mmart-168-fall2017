/*  Steve DeNault

Modify this code so that it displays the following message inside the "output" div:
"Hello, Leon. Welcome to the site!" But replace "Leon" with whatever name the user types into the form input.

In tha variable "name" "Leon" was replaced by "user-input" that is modified
Printout via innerHTML of "output" div.
*/

const displayName = () => {
    var name =  document.getElementById("user_input").value
    document.getElementById("output").innerHTML =
    ('Hello ' + name + '. Welcome to the site!')
    //Your Code here:

}
