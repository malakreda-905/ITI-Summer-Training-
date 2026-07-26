var gen = getCookie("gender").split("=")[1]; 
var colr = getCookie("color").split("=")[1]; 
var name = getCookie("name").split("=")[1];  

var pic = document.getElementById("profile pic");
var wel = document.getElementById("name");  

if(gen === 'male'){
    pic.innerHTML = '<img src = "1.jpg">'; 
} 
else{
    pic.innerHTML = '<img src = "2.jpg">';
}

wel.textContent = name;
wel.style.color = colr;