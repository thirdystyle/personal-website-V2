// //alert("hello")
// document.querySelectorAll("button")[0].addEventListener("click", function () 
// {//alert("this is W")
//  var audio = new Audio("sounds/tom-1.mp3");   
//  audio.play();
// })
// document.querySelectorAll("button")[1].addEventListener("click", function () 
// {//alert("this is a")
//     var audio = new Audio("sounds/tom-2.mp3");   
//     audio.play();
// })
// document.querySelectorAll("button")[2].addEventListener("click", function () 
// {//alert("this is s")
//     var audio = new Audio("sounds/tom-3.mp3");   
//     audio.play();
// })
// document.querySelectorAll("button")[3].addEventListener("click", function () 
// {//alert("this is d")
//     var audio = new Audio("sounds/tom-4.mp3");   
//     audio.play();
// })
// document.querySelectorAll("button")[4].addEventListener("click", function () 
// {//alert("this is j")
//     var audio = new Audio("sounds/snare.mp3");   
//     audio.play();
// })
// document.querySelectorAll("button")[5].addEventListener("click", function () 
// {//alert("this is k")
//     var audio = new Audio("sounds/crash.mp3");   
//     audio.play();
// })
// document.querySelectorAll("button")[6].addEventListener("click", function () 
// {//alert("this is l")
//     var audio = new Audio("sounds/kick-bass.mp3");   
//     audio.play();
// })
var numofdrumbut = document.querySelectorAll(".drum").length
for (var i = 0; i < numofdrumbut; i++)
{document.querySelectorAll(".drum")[i].addEventListener("click", function()
{ var buttinerhtml = this.innerHTML;
    makesound(buttinerhtml)
    animation(buttinerhtml)
  




} 
    
)

}
document.addEventListener("keypress", function(event) {
    makesound(event.key)
animation(event.key)})
    

function makesound(key){
    
    switch(key)
    {case"w":
     var tom1 = new Audio("sounds/tom-1.mp3");   
     tom1.play();
     break;
 
     case"a":
     var tom2= new Audio("sounds/tom-2.mp3");   
     tom2.play();
     break;
 
     case"s":
     var tom3 = new Audio("sounds/tom-3.mp3");   
     tom3.play();
     break;
 
     case"d":
     var tom4 = new Audio("sounds/tom-4.mp3");   
     tom4.play();
     break;
 
     case"j":
     var snare = new Audio("sounds/snare.mp3");   
     snare.play();
     break;
 
     case"k":
     var crash = new Audio("sounds/crash.mp3");   
     crash.play();
     break;
 
     case"l":
     var kickbass = new Audio("sounds/kick-bass.mp3");   
     kickbass.play();
     break;
 
 
     default: console.log(buttinerhtml);
 
 
    }
}
function animation(currentkey){
   var activebutton =  document.querySelector("." + currentkey)
   activebutton.classList.add("pressed")
   setTimeout(function (){activebutton.classList.remove("pressed")}, 100);
}