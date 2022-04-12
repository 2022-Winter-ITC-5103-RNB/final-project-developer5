let myImagesArray = ["../Images/2.jpg", "../Images/4.jpg", "../Images/5.jpg"];
let ImageNumber = 0;
let difference = myImagesArray.length -1;
let delay = 2000; 


setInterval('ChangeImages(1)', delay);
    

    function ChangeImages(direction)
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
		
		document.getElementById('slideshow').src = myImagesArray[ImageNumber];



    }