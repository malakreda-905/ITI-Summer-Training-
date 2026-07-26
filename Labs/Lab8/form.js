var submit = document.getElementById("btn1"); 

submit.addEventListener("click", 
    function (){
        location.href = "profile.html"; 
    }
); 

var name = document.getElementById("name"); 

if(name === "" || !(name instanceof String)){
    throw error = "Please Enter your name "; 
}