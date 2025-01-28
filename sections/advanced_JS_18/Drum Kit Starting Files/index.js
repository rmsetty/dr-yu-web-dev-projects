//------------------------ VERSION 1 ----------------------------------
// function handleClick()
// {
//     var sound = new Audio('sounds/tom-1.mp3');
//     sound.play();
//     this.style.color = 'white';
//     setTimeout(() => {
//         this.style.color = ''; // Reset the color
//       }, 100); // 100ms delay
//     console.log(this);
// };


// const buttons = document.querySelectorAll("button");
// buttons.forEach(button => {
//     button.addEventListener("click", handleClick);
// });

// ------------------------ VERSION 2 ----------------------------------
// document.querySelectorAll(".drum").forEach(button => {
//     button.addEventListener("click", function () {
//         let buttonInnerHTML = this.innerHTML;
//         switch (buttonInnerHTML)
//         {
//             case "w":
//                 var tom1 = new Audio("sounds/tom-1.mp3");
//                 tom1.play();
//                 break;
//             case "a":
//                 var tom2 = new Audio("sounds/tom-2.mp3");
//                 tom2.play();
//                 break;
//             case "s":
//                 var tom3 = new Audio("sounds/tom-3.mp3");
//                 tom3.play();
//                 break;
//             case "d":
//                 var tom4 = new Audio("sounds/tom-4.mp3");
//                 tom4.play();
//                 break;
//               case "j":
//                 var snare = new Audio("sounds/snare.mp3");
//                 snare.play();
//                 break;
//             case "k":
//                 var crash = new Audio("sounds/crash.mp3");
//                 crash.play();
//                 break;
//             case "l":
//                 var kickBass = new Audio("sounds/kick-bass.mp3");
//                 kickBass.play();
//                 break;
//             default:
//                 console.log(buttonInnerHTML);
//         }
//     })
// });

// ------------------------ VERSION 3 ----------------------------------
document.addEventListener("keydown", function (event) {
    var keyPressed = event.key;

    switch(keyPressed)
    {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
          case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
          case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
          case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
          case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
          case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
          case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
          default:
            console.log(keyPressed); // Logs the key if it's not in the specified cases
    }
});

