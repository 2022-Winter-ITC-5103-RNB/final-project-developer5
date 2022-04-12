function validateform(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let msg = document.getElementById("msg").value;
  let mname = document.getElementById("mname");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
  let memail = document.getElementById("memail");
  let mphone = document.getElementById("mphone");
  let mtext = document.getElementById("textmsg");

  if(name == ""){
    mname.innerHTML = "*name must be filled"; 
  }
  else{
    mname.innerHTML = "";
  }

  if(!email.match(pattern)){
    memail.innerHTML = "*email id not valid";
  }
  else{
    memail.innerHTML = "";
  }

  if(isNaN(phone)){
    mphone.innerHTML = "*phone must be a number";
  }
  else if(phone == ""){
    mphone.innerHTML = "*phone should not be empty";
  }
  else{
    mphone.innerHTML = "";
  }


  if(msg.length > 30 ){
    mtext.innerHTML = "*message should be less than 30 characters."
  }
  else if(msg == ""){
    mtext.innerHTML = "*please write your message"
  }
  else{
    mtext.innerHTML = "";
  }
  
}