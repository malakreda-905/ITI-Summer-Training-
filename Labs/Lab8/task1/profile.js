var visits = hasCookie("visits"); 
if(visits){
    setCookie("visits",Number(getCookie("visits")) + 1,10); 
}
else{
    setCookie("visits",1,10); 
}

var gen = getCookie("gender"); 
var colr = getCookie("color"); 
var name = getCookie("name");  
var visits = getCookie("visits"); 

var pic = document.getElementById("profile pic");
var wel = document.getElementById("name");  
var v = document.getElementById("visits"); 

if(gen === 'male'){
    pic.innerHTML = '<img src = "1.jpg">'; 
} 
else{
    pic.innerHTML = '<img src = "2.jpg">';
}

wel.textContent = name;
wel.style.color = colr;

v.textContent = visits; 
v.style.color = colr;