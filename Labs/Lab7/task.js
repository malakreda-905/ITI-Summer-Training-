function index(){
    for(var i = 0; i < document.images.length; i++){
        if(document.images[i].style.display !== "none"){
            return i; 
        }
    }
}

document.images[0].style.display = "block"; 

document.querySelector("[value='Slideshow']").addEventListener("click",
    function (){
        for(let i = 0; i < document.images.length; i++){
            setTimeout(function() 
                {
                    if(i > 0){
                        document.images[i-1].style.display = "none";
                    }
                    document.images[i].style.display = "block"
                }, 
            i * 2000); 
        }
    }
); 

