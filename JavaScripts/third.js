

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
    return false;
  }
  else{
    mname.innerHTML = "";
  }

  if(!email.match(pattern)){
    memail.innerHTML = "*email id not valid";
    return false;
  }
  else{
    memail.innerHTML = "";
  }

  if(isNaN(phone)){
    mphone.innerHTML = "*phone must be a number";
    return false;
  }
  else if(phone == ""){
    mphone.innerHTML = "*phone should not be empty";
    return false;
  }
  else{
    mphone.innerHTML = "";
  }


  if(msg.length > 30 ){
    mtext.innerHTML = "*message should be less than 30 characters."
    return false;
  }
  else if(msg == ""){
    mtext.innerHTML = "*please write your message";
    return false;
  }
  else{
    mtext.innerHTML = "";
  }
  let hiddenmsg = document.getElementById("hidden-msg");
  hiddenmsg.style.display ="block";
  // hiddenmsg.innerHTML = "Thank you for your response";
  return true;
  
}
