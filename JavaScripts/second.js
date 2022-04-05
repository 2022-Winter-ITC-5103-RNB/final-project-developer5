function submit(){
   var x = document.getElementById('hiddenform');
   if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function submitform(){
    const x = document.querySelectorAll('input[name="day"]');
    const btn = document.getElementById('formsubmit');
    const place = document.getElementById('place_name');
    let selectedoption;
    for(const radioButton of x){
        if(radioButton.checked){
            selectedoption = radioButton.value;
            break;
        }
    }
    console.log(place.value); 
    h4t.innerText = `Thank you for your response`;
    h4y.innerText = `Your request will be processed in short span`;  
    output.innerText = selectedoption ? `You Selected to : ${selectedoption}` : `Your form is not complete`; 
    place_added.innerText = `The Place which you like to visit is : ${place.value}`;

}