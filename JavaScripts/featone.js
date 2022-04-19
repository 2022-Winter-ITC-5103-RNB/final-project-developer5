let myImagesArray = ["../Images/palo2.jpg", "../Images/palo3.jpg", "../Images/istockphoto-482535663-612x612.jpg"];
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