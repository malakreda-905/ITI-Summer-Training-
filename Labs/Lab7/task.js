function index(){
    for(var i = 0; i < document.images.length; i++){
        if(document.images[i].style.display !== "none"){
            return Number(i); 
        }
    }
}

document.images[0].style.display = "block"; 
var id; 
var slideshow = false; 

document.querySelector("[value='Slideshow']").addEventListener("click",
    function(){
        clearInterval(id);
        slideshow = true; 
        var idx = index(); 
        document.images[idx].style.display = "none"; 
        var i = 0; 
        document.images[i].style.display = "block";
        i+=1; 
        id = setInterval(function() 
            {
                if(i === document.images.length){
                    clearInterval(id); 
                    slideshow = false; 
                    return; 
                }
                document.images[i-1].style.display = "none"; 
                document.images[i].style.display = "block";
                i += 1; 
            }, 
        500); 
    }
); 

document.querySelector("[value='Stop']").addEventListener("click",
    function(){
        var i = index(); 
        if(slideshow){
            clearInterval(id);
            slideshow = false; 
        }
    }
);

document.querySelector("[value='Next']").addEventListener("click",
    function(){
        clearInterval(id);
        slideshow = false; 
        var i = index(); 
        if(i !== document.images.length-1){
            document.images[i].style.display = "none";
            document.images[i+1].style.display = "block";
        }
    }
);

document.querySelector("[value='Previous']").addEventListener("click",
    function(){
        clearInterval(id);
        slideshow = false; 
        var i = index(); 
        if(i !== 0){
            document.images[i].style.display = "none";
            document.images[i-1].style.display = "block";
        }
    }
);