
 var length=document.querySelectorAll(".drum").length;
// for(var i=0;i<length;i++){
// document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//     // var audio = new Audio('sounds/tom-1.mp3');
//     // audio.play();
//     // this.style.color="white";
//     //     console.log(this.innerHTML);
//     var b=this.innerHTML;
//     switch(b){
//                case "w":
//                var audio = new Audio('sounds/tom-1.mp3');
//                 audio.play();
//                 break;
//                 case "a":
//                var audio = new Audio('sounds/tom-2.mp3');
//                 audio.play();
//                 break;
//                 case "s":
//                var audio = new Audio('sounds/tom-3.mp3');
//                 audio.play();
//                 break;
//                 case "d":
//                var audio = new Audio('sounds/tom-4.mp3');
//                 audio.play();
//                 break;
//                 case "j":
//                var audio = new Audio('sounds/crash.mp3');
//                 audio.play();
//                 break;
//                 case "k":
//                var audio = new Audio('sounds/snare.mp3');
//                 audio.play();
//                 break;
//                 case "l":
//                var audio = new Audio('sounds/kick-bass.mp3');
//                 audio.play();
//                 break;
//                 default:
//     }
// });
// }
for(var i=0;i<length;i++){
     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var inHT=this.innerHTML;
     makeSound(inHT);
     btnAnimation(inHT);

     });
    }
    //dectecting keyboard press
document.addEventListener("keypress",function(event){

makeSound(event.key);
btnAnimation(inHT);

});

    function makeSound(key){
        switch(key){
                           case "w":
                           var audio = new Audio('sounds/tom-1.mp3');
                            audio.play();
                            break;
                            case "a":
                           var audio = new Audio('sounds/tom-2.mp3');
                            audio.play();
                            break;
                            case "s":
                           var audio = new Audio('sounds/tom-3.mp3');
                            audio.play();
                            break;
                            case "d":
                           var audio = new Audio('sounds/tom-4.mp3');
                            audio.play();
                            break;
                            case "j":
                           var audio = new Audio('sounds/crash.mp3');
                            audio.play();
                            break;
                            case "k":
                           var audio = new Audio('sounds/snare.mp3');
                            audio.play();
                            break;
                            case "l":
                           var audio = new Audio('sounds/kick-bass.mp3');
                            audio.play();
                            break;
                            default:
                }
    }

    function btnAnimation(currentKey){
        var btn=document.querySelector("."+currentKey);
        btn.classList.add("pressed");
        setTimeout(function(){
            btn.classList.remove("pressed");
        },100);
        
    }