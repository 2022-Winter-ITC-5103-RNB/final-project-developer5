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


let myImagesArray = ["../Images/fun1.jpg","../Images/fun2.jpg", "../Images/fun3.jpg"];
let ImageNumber = 0;
let difference = myImagesArray.length -1;
let delay = 1500; 


setInterval('Slideimages(1)', delay);
    

    function Slideimages(direction)
    {

		ImageNumber = ImageNumber + direction;

		if(ImageNumber > difference)
		{
			ImageNumber = 0;
		}

		if(ImageNumber < 0)
		{
			ImageNumber = difference;
		}
		
		document.getElementById('slider').src = myImagesArray[ImageNumber];

    }

  
