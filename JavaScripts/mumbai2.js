
function validate() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var error_message = document.getElementById("error");

  error.style.padding = "10px";

  var text;
  if (name.length < 5) {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  else {
    alert("We will get back to you as soon as possible!", "Thank you");
    return true;
  }
}

