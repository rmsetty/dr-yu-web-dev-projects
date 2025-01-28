//------------------------ VERSION 1 ----------------------------------
function handleClick()
{
    var sound = new Audio('sounds/tom-1.mp3');
    sound.play();
    this.style.color = 'white';
    setTimeout(() => {
        this.style.color = ''; // Reset the color
      }, 100); // 100ms delay
    console.log(this);
};


const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", handleClick);
});

