//For 1st Place Image

var i = 0
var images = [];
var time = 2000;

images[0] = '../Images/place1.jpg';
images[1] = '../Images/nal2.jpg';
images[2] = '../Images/nal3.jpg';

function changeImg(){
  document.slide1.src = images[i];

  if(i < 2){
    i++;
  }
  else{
    i = 0;
  }
  
  setTimeout("changeImg()", time);
}
window.onload = changeImg;


//For 2nd Place image
var  images2 = [];

images2[0] = '../Images/AdalajniVav.jpg';
images2[1] = '../Images/ada2.jpg';
images2[2] = '../Images/ada3.jpg';

var i2 = 0;
function changeImg2(){
  document.slide2.src = images2[i2];

  if(i2 < 2){
    i2++;
  }
  else{
    i2 = 0;
  }
  
  setTimeout("changeImg2()", time);
}

changeImg2()




var  images3 = [];

images3[0] = '../Images/Polo-Forest.jpg';
images3[1] = '../Images/polo2.jpg';
images3[2] = '../Images/polo3.jpg';

var i3 = 0;
function changeImg3(){
  document.slide3.src = images3[i3];

  if(i3 < 2){
    i3++;
  }
  else{
    i3 = 0;
  }
  
  setTimeout("changeImg3()", time);
}

changeImg3()