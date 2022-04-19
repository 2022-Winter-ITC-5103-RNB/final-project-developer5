var post= document.getElementById("submit");

post.addEventListener("click", function(){
    
    var commentBoxValue= document.getElementById("comment-box").value;
    
    var li = document.createElement("li");
    
    var text = document.createTextNode(commentBoxValue);
    
    li.appendChild(text);
    
    document.getElementById("ordered").appendChild(li);

    document.getElementById("last").innerHTML = "Thank you for response, the changes will be noted. "
 
});