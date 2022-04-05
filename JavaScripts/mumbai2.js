const email = document.getElementById('email')
const form = document.getElementById('newsLetter')
const error = document.getElementById('error')
let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


form.addEventListener('submit', (e) => {
  let messages = []

  if (!re.test(email.value)) { // test value of email
    messages.push('Invalid email')
  }
  console.log(messages);
  if (messages.length > 0) {
    e.preventDefault()
    error.innerText = messages.join('')
  }
 
})

function alert(){
    swal("We will get back to you as soon as possible!","Thank you");
}
  
