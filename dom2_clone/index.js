// for (let i = 0; i < 3; i++) {
//   let playBtn = document.querySelectorAll(".myButton")[i];
//   playBtn.addEventListener("click", function () {
//     let text = this.innerHTML;
//     console.log(text);
//     playAudion(text);
//   });
// }

// function playAudion(text) {
//   switch (text) {
//     case "a":
//       var audio = new Audio("sounds/a1.mp3");
//       audio.play();
//       break;

//     case "b":
//       var audio = new Audio("sounds/a2.mp3");
//       audio.play();
//       break;

//     case "c":
//       var audio = new Audio("sounds/a3.mp3");
//       audio.play();
//       break;
//   }
// }

for (let i = 0; i < 3; i++) {
  let selectButton = document.querySelectorAll(".myButton")[i];
  selectButton.addEventListener("click", function () {
    let butonText = this.innerHTML;
    console.log(butonText);
    playAudio(butonText);
    playAnimation(butonText);
  });
}

// creating keypress event listener

document.addEventListener("keypress", function (event) {
  let butonText = event.key;
  playAudio(butonText);
  playAnimation(butonText);
});

// creating a audio play function

function playAudio(butonText) {
  switch (butonText) {
    case "a":
      var audio = new Audio("sounds/a1.mp3");
      audio.play();
      break;

    case "b":
      var audio = new Audio("sounds/a2.mp3");
      audio.play();
      break;

    case "c":
      var audio = new Audio("sounds/a3.mp3");
      audio.play();
      break;
  }
}

//creating a function add animation using js

function playAnimation(butonText) {
  let animBtn = document.querySelector("." + butonText);
  animBtn.classList.add("animation");

  setTimeout(function () {
    animBtn.classList.remove("animation");
  }, 1000);
}
