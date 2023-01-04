for(let i = 0; i < 3; i++){
    let buttonClass = document.querySelectorAll(".myButton")[i]; 
    buttonClass.addEventListener("click", function(){
        let text = this.innerHTML;
        
        switch(text){
            case "a" :
            var audio = new Audio('sounds/a1.mp3');
            audio.play();
            break;

            case "b" :
            var audio = new Audio("sounds/a2.mp3");
            audio.play();
            break;

            case "c" :
            var audio = new Audio("sounds/a3.mp3");
            audio.play();
            break;
        }
})
}