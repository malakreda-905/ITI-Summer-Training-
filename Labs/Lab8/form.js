
var submit = document.getElementById("btn1"); 

submit.addEventListener("click", 
    function (){
        if(validate()){   
            location.href = "profile.html"; 
        } 
    }
); 

function validate (){
    var name = document.getElementById("name").value; 

    if(name.trim() === ""){
        alert("Please Enter your name" );
        return false; 
    }

    if (!isNaN(name)) {
        alert("Name cannot be a number");
        return false;
    }

    var age = document.getElementById("age").value; 

    if(isNaN(age) || age.trim() === ""){
        alert("Age must be a number"); 
        return false; 
    }

    var gender = document.querySelector('input[name="gender"]:checked');

    if (!gender) {
        alert("Please select a gender");
        return false;
    }

    return true; 
}