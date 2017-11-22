/* Steve DeNault
Instructions: Modify the function below so that it ensure that the user entered a valid email address. To to this, the function will examine the text that the user entered, and check that it:

  1) Contains an @ symbol
  2) Contains a . symbol
  3) Is at least 6 characters long

If all of these criteria are fulfilled, display a message in the #success div that tells the user that everything is OK. Otherwise, display a nessage in the #error div explaining to the user what they've done wrong

A three-part boolean test constructed then an if/ else test for response
to either true or false conditions.
*/

const validateEmailAddress = () => {
  //email must contain three attributes
  let str = document.getElementById("email_address").value;
  let n = str.includes("@") && str.includes(".") && str.length >= 6;

  document.getElementById("success").innerHTML = ''
  document.getElementById("error").innerHTML = ''
  if (n == true) {
    document.getElementById("success").innerHTML = 'success'
  }  else {
    document.getElementById("error").innerHTML = 'error'
  }
}
