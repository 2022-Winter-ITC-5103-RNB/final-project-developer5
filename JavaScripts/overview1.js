let imageArray = ["../Images/2_2.jpeg","../Images/3_3.jpeg","../Images/Munnar.jpg"];
let ImageNumber = 0;
let diff = imageArray.length -1;
let delay = 2000;

setInterval('ChnageImages(1)', delay);

function ChnageImages(direction)
{
    ImageNumber = ImageNumber + direction;

    if(ImageNumber > diff)
    {
        ImageNumber = 0;
    }

    if(ImageNumber < 0)
    {
        ImageNumber = diff;
    }

    document.getElementById('ss').src = imageArray[ImageNumber];
}



let imageArray1 = ["../Images/2_2.jpeg","../Images/3_3.jpeg","../Images/silentvalley.jpg"];
let ImageNumber1 = 0;
let diff1 = imageArray1.length -1;
let delay1 = 2000;

setInterval('ChnageImages1(1)', delay1);

function ChnageImages1(direction1)
{
    ImageNumber1 = ImageNumber1 + direction1;

    if(ImageNumber1 > diff1)
    {
        ImageNumber1 = 0;
    }

    if(ImageNumber1 < 0)
    {
        ImageNumber1 = diff1;
    }

    document.getElementById('ss1').src = imageArray1[ImageNumber1];
}


let imageArray2 = ["../Images/2_2.jpeg","../Images/3_3.jpeg","../Images/Edakkal Caves.jpg"];
let ImageNumber2 = 0;
let diff2 = imageArray1.length -1;
let delay2 = 2000;

setInterval('ChnageImages2(1)', delay2);

function ChnageImages2(direction2)
{
    ImageNumber2 = ImageNumber2 + direction2;

    if(ImageNumber2 > diff2)
    {
        ImageNumber2 = 0;
    }

    if(ImageNumber2 < 0)
    {
        ImageNumber2 = diff2;
    }

    document.getElementById('ss2').src = imageArray2[ImageNumber2];
}




