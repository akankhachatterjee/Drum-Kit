
//Detecting Button Press

for(var i=0;i<(document.querySelectorAll('.drum').length);i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    
        /*If we use this with arrow func then it selects the place where the arrow func is defined(window)
        and not where the this keyword is used.So when arrow is used to select the current element we use
        event.target and not this.This will work when we use normal func and so it selects the current element
        being clicked. */
        var sound = this.innerHTML;
        soundPlay(sound);

        animateButton(sound);
                
     });
}

//Detecting Keyboard Press

document.addEventListener("keydown",function(event){
    var sound = event.key;
    soundPlay(sound);

    animateButton(sound);
});

//Selecting the sound to play

function soundPlay(sound){
    switch(sound){
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            alert("No such sound!!");
            break;
    }
}

//To animate the button that was pressed
function animateButton(current){
    var active = document.querySelector("."+current);
    active.classList.add("pressed");

    setTimeout(function(){
        active.classList.remove("pressed");
    },100);
};