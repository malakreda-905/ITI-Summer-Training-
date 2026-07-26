var gen = getCookie("gender"); 

var pic = document.getElementById("profile pic"); 

if(gen.split("=")[1] === 'male'){
    pic.innerHTML = '<img src = "1.jpg">'; 
} 
else{
    pic.innerHTML = '<img src = "2.jpg">';
}