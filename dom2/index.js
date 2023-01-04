for(let i = 0; i < 3; i++){
    let buttonClass = document.querySelectorAll(".myButton")[i]; 
    buttonClass.addEventListener("click", function(){
        let text = this.innerHTML;
        console.log(text);
        audioPlay(text);  
        playAnimation(text);
})
}


function audioPlay(text){
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
}


function playAnimation(text){
    let selectedButton = document.querySelector("." + text);
    selectedButton.classList.add("anim");
    
    setTimeout(function(){
        selectedButton.classList.remove("anim");
    },1000);
}