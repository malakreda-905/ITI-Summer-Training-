
var submit = document.getElementById("btn1"); 

submit.addEventListener("click", 
    function (){
        if(validate()){   
            var name = document.getElementById("name").value; 
            var age = document.getElementById("age").value; 
            var gender = document.querySelector('input[name="gender"]:checked').value; 
            var color = document.getElementById("color").value; 

            setCookie("name",name,2); 
            setCookie("age",age,2); 
            setCookie("gender",gender,2); 
            setCookie("color",color,2); 

            // var visits = hasCookie("visits"); 
            // if(visits){
            //     setCookie("visits",Number(getCookie("visits")) + 1,10); 
            // }
            // else{
            //     setCookie("visits",1,10); 
            // }
            
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