function formval(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("number").value;
    var error = document.getElementById("error");
    var submit = document.getElementById("submit");
    var text;
    
    if(name.length < 4){
        text = "Please Enter valid Name";
        error.innerHTML = text;
        return false;
      }

    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter valid Phone Number";
        error.innerHTML = text;
        return false;
      }
    
    if(email.indexOf("@") == -1 || email.length < 8){
      text = "Please Enter valid Email";
      error.innerHTML = text;
      return false;
    }
    submit.innerHTML = "Thank you. Your trip details have been saved"

    alert("Form Submitted Successfully!");
   return true;
   
  }



  
