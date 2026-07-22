function index(){
    for(var i = 0; i < document.images.length; i++){
        if(document.images[i].style.display !== "none"){
            return Number(i); 
        }
    }
}

document.images[0].style.display = "block"; 

document.querySelector("[value='Slideshow']").addEventListener("click",
    function(){
        var idx = index(); 
        document.images[idx].style.display = "none"; 
        for(let i = 0; i < document.images.length; i++){
            setTimeout(function() 
                {
                    if(i > 0){
                        document.images[i-1].style.display = "none";
                    }
                    document.images[i].style.display = "block";
                }, 
            i * 2000); 
        }
    }
); 

document.querySelector("[value='Next']").addEventListener("click",
    function(){
        var i = index(); 
        if(i !== document.images.length-1){
            document.images[i].style.display = "none";
            document.images[i+1].style.display = "block";
        }
    }
);