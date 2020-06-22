window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colours = [
    "#FF5733",
    "#F78D23",
    "#FFE50B",
    "#33A50C",
    "#20D0C8",
    "#7520D0"
  ]

  //Sounds
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBalls(index);
    });
  });

  const createBalls = ((index) =>{
    const ball = document.createElement("div");
    visual.appendChild(ball)
    ball.style.backgroundColor = colours[index];
    ball.style.animation = "jump 1s ease";
    ball.addEventListener("animationend", function(){
      visual.removeChild(this);
    });
  });
});