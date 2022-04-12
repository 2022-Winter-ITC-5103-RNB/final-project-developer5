// const email = document.getElementById('email')
// const form = document.getElementById('newsLetter')
// const error = document.getElementById('error')
// let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


// // form.addEventListener('submit', (e) => {
// //   let messages = []

// //   if (!re.test(email.value)) { // test value of email
// //     messages.push('Invalid email')
// //   }
// //   // // console.log(messages);
// //   // if (messages.length > 0) {
// //   //   e.preventDefault()
// //   //   error.innerText = messages.join('')
// //   // }
 
// // },function alert(){
// //   swal("We will get back to you as soon as possible!","Thank you");
// // })


  
// form.addEventListener('submit', function() {
//   let messages = [];

//   if (!re.test(email.value)) { // test value of email
//     messages.push('Invalid email')
//   }
//   else{
//     function alert(){
//       swal("We will get back to you as soon as possible!","Thank you");
//     }
//   }
// })



function validate(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var error_message = document.getElementById("error");

  error.style.padding = "10px";

  var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    else
    {
      alert("We will get back to you as soon as possible!","Thank you");
      return true;
    }
}

