



validateform = () => {
    var name = document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var error=document.getElementById("error");

    error.style.padding="10px";

    var text;
    if(name.length <5){
        text="Please Enter your Name...";
        error.innerHTML=text;
        return false;
    }
    
}



