let myImagesArray = ["assets\1.jpg", "assets\2.jpg", "assets\3.jpg"];
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