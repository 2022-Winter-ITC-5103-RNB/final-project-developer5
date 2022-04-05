function validate(){
    var valid = true, errors = "", field = "";
    field = document.getElementById("fname");
    errors = document.getElementById("cname");
   
    

    
    

    if (!field.checkValidity()) {
        valid = false;
        field.classList.add("err");
        errors.innerHTML = "Name must be 2-4 characters\r\n";
    }
    else {
        field.classList.remove("err");
        errors.innerHTML = "";
      }
      
// Mobile number validation
      let x = document.getElementById("mnumber").value;
      let text;
      if (isNaN(x) || x < 1 || x > 10) {
          text = "Input not valid";
        } else {
          text = "Input OK";
        }
        document.getElementById("demo").innerHTML = text;
   

// Email Validation
        
        let y = document.getElementById("emailid");
        let text1;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(y.value)) {
            text1 = "Please provide a valid email address";
        }
        else{
            text1 = "Input Ok"
        }
        document.getElementById("demo1").innerHTML = text1;    
       

    return valid;
   

       
    }
