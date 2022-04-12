let myImagesArray = ["../Images/Mumbai2.jpg", "../Images/mumbai3.jpg", "../Images/mumbai4.jpg", "../Images/mumbai5.jpg"];
let ImageNumber = 0;
let difference = myImagesArray.length - 1;
let delay = 2000;


setInterval('ChangeImages(1)', delay);


function ChangeImages(direction) {

	ImageNumber = ImageNumber + direction;

	if (ImageNumber > difference) {
		ImageNumber = 0;
	}

	if (ImageNumber < 0) {
		ImageNumber = difference;
	}

	document.getElementsByClassName('slideshow').src = myImagesArray[ImageNumber];



}